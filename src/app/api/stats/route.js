import { NextResponse } from "next/server";

import { process as steps, stats } from "@/data/stats";
import { site } from "@/data/site";

export const runtime = "nodejs";

/** GET /api/stats — company counters, process steps and contact details. */
export async function GET() {
  return NextResponse.json({
    ok: true,
    company: {
      name: site.name,
      fullName: site.fullName,
      email: site.email,
      phone: site.phone,
      address: site.address,
      hours: site.hours,
    },
    stats,
    process: steps,
  });
}
