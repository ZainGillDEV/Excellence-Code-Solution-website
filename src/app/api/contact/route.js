import { NextResponse } from "next/server";

import { sendContactEmails } from "@/lib/mailer";
import { connectToDatabase, hasMongo } from "@/lib/mongodb";
import { clientIp, rateLimit } from "@/lib/rateLimit";
import { listContactsFromFile, saveContactToFile } from "@/lib/store";
import { validateContact } from "@/lib/validate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/contact — receive a contact-form submission.
 *
 * Order of business: rate limit → honeypot → validate → store → email.
 * Storage never depends on email: if SMTP is down the enquiry is still
 * saved, and the visitor still gets a success response.
 */
export async function POST(request) {
  const ip = clientIp(request);
  const limit = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });

  if (!limit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: `Too many messages from this address. Please try again in ${Math.ceil(
          limit.retryAfter / 60
        )} minute(s).`,
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: real people never fill this in. Answer 200 so bots learn nothing.
  if (body.company) {
    return NextResponse.json({ ok: true, message: "Thanks for your message." });
  }

  const { data, errors, valid } = validateContact(body);

  if (!valid) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", errors },
      { status: 422 }
    );
  }

  const record = {
    ...data,
    status: "new",
    meta: {
      ip,
      userAgent: request.headers.get("user-agent") || "",
    },
  };

  let saved = null;

  try {
    if (hasMongo) {
      await connectToDatabase();
      const { default: Contact } = await import("@/models/Contact");
      saved = await Contact.create(record);
    } else {
      saved = await saveContactToFile(record);
    }
  } catch (error) {
    console.error("[contact] store failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We couldn't save your message just now. Please try again, or email us directly.",
      },
      { status: 500 }
    );
  }

  let emailed = { sent: false };
  try {
    emailed = await sendContactEmails(data);
  } catch (error) {
    console.error("[contact] email failed:", error);
  }

  return NextResponse.json({
    ok: true,
    id: String(saved?._id || ""),
    emailed: emailed.sent,
    message:
      "Thanks! Your message is with us — we'll reply within 24 hours.",
  });
}

/**
 * GET /api/contact — list recent enquiries.
 *
 * Protected by a bearer token so it can back a simple admin view.
 * Set ADMIN_API_TOKEN in .env.local; without it the endpoint stays closed.
 */
export async function GET(request) {
  const token = process.env.ADMIN_API_TOKEN;
  const auth = request.headers.get("authorization") || "";

  if (!token || auth !== `Bearer ${token}`) {
    return NextResponse.json(
      { ok: false, message: "Unauthorised." },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const limit = Math.min(Number(searchParams.get("limit") || 50), 200);

  try {
    if (hasMongo) {
      await connectToDatabase();
      const { default: Contact } = await import("@/models/Contact");
      const items = await Contact.find()
        .sort({ createdAt: -1 })
        .limit(limit)
        .lean();
      return NextResponse.json({ ok: true, count: items.length, items });
    }

    const items = await listContactsFromFile({ limit });
    return NextResponse.json({ ok: true, count: items.length, items });
  } catch (error) {
    console.error("[contact] list failed:", error);
    return NextResponse.json(
      { ok: false, message: "Could not load enquiries." },
      { status: 500 }
    );
  }
}
