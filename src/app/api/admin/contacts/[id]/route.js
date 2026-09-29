import { NextResponse } from "next/server";

import { isSignedIn } from "@/lib/adminAuth";
import { STATUSES, deleteContact, updateContact } from "@/lib/contacts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function guard() {
  if (isSignedIn()) return null;
  return NextResponse.json(
    { ok: false, message: "Not signed in." },
    { status: 401 }
  );
}

/** PATCH /api/admin/contacts/:id — change an enquiry's status. */
export async function PATCH(request, { params }) {
  const denied = guard();
  if (denied) return denied;

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  if (!STATUSES.includes(body.status)) {
    return NextResponse.json(
      { ok: false, message: `Status must be one of: ${STATUSES.join(", ")}` },
      { status: 422 }
    );
  }

  try {
    const item = await updateContact(params.id, { status: body.status });
    if (!item) {
      return NextResponse.json(
        { ok: false, message: "Enquiry not found." },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true, item });
  } catch (error) {
    console.error("[admin] update failed:", error);
    return NextResponse.json(
      { ok: false, message: "Could not update that enquiry." },
      { status: 500 }
    );
  }
}

/** DELETE /api/admin/contacts/:id — remove an enquiry for good. */
export async function DELETE(_request, { params }) {
  const denied = guard();
  if (denied) return denied;

  try {
    const removed = await deleteContact(params.id);
    if (!removed) {
      return NextResponse.json(
        { ok: false, message: "Enquiry not found." },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin] delete failed:", error);
    return NextResponse.json(
      { ok: false, message: "Could not delete that enquiry." },
      { status: 500 }
    );
  }
}
