import { NextResponse } from "next/server";

import { categories, getProject, projects } from "@/data/projects";

export const runtime = "nodejs";

/**
 * GET /api/projects                  — every project
 * GET /api/projects?category=AI%20%26%20ML  — filtered
 * GET /api/projects?slug=...         — one project
 * GET /api/projects?limit=4          — capped
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const category = searchParams.get("category");
  const limit = Number(searchParams.get("limit") || 0);

  if (slug) {
    const project = getProject(slug);
    if (!project) {
      return NextResponse.json(
        { ok: false, message: "Project not found." },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true, item: project });
  }

  let items = projects;

  if (category && category !== "All") {
    if (!categories.includes(category)) {
      return NextResponse.json(
        { ok: false, message: "Unknown category.", categories },
        { status: 400 }
      );
    }
    items = items.filter((p) => p.category === category);
  }

  if (limit > 0) items = items.slice(0, limit);

  return NextResponse.json({
    ok: true,
    count: items.length,
    categories,
    items,
  });
}
