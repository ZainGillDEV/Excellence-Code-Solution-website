import { NextResponse } from "next/server";

import { getService, services } from "@/data/services";

export const runtime = "nodejs";

/**
 * GET /api/services            — every service
 * GET /api/services?slug=...   — one service
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const service = getService(slug);
    if (!service) {
      return NextResponse.json(
        { ok: false, message: "Service not found." },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true, item: service });
  }

  return NextResponse.json({
    ok: true,
    count: services.length,
    items: services,
  });
}
