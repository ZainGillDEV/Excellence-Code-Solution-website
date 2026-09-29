import { NextResponse } from "next/server";

import {
  COOKIE_NAME,
  cookieOptions,
  createSessionValue,
  isAdminConfigured,
  passwordMatches,
} from "@/lib/adminAuth";
import { clientIp, rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** POST /api/admin/login — exchange the admin password for a session cookie. */
export async function POST(request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Admin access is not set up. Add ADMIN_PASSWORD to your environment variables and redeploy.",
      },
      { status: 503 }
    );
  }

  // Slow down password guessing: 8 attempts per IP per 15 minutes.
  const limit = rateLimit(`admin-login:${clientIp(request)}`, {
    limit: 8,
    windowMs: 15 * 60 * 1000,
  });

  if (!limit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: `Too many attempts. Try again in ${Math.ceil(
          limit.retryAfter / 60
        )} minute(s).`,
      },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  if (!passwordMatches(body.password)) {
    return NextResponse.json(
      { ok: false, message: "That password is not correct." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, createSessionValue(), cookieOptions);
  return response;
}
