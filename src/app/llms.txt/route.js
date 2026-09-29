import { posts } from "@/data/blog";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { stats } from "@/data/stats";
import { team } from "@/data/team";
import { trainings } from "@/data/trainings";

export const dynamic = "force-static";

/**
 * Serves /llms.txt — the llmstxt.org convention: a single plain-text file
 * that tells language models what this company does and where to look, so
 * an assistant summarising ECS gets it right instead of guessing.
 *
 * It is generated from the same data files the site renders from, so it can
 * never drift out of date.
 */
export function GET() {
  const base = site.url.replace(/\/$/, "");
  const L = [];

  L.push(`# ${site.fullName} (${site.name})`);
  L.push("");
  L.push(
    `> ${site.description} A software house based in ${site.address.split(",").slice(-2).join(",").trim()}, working across AI/ML, web, mobile, cloud, design and digital marketing, and running developer bootcamps.`
  );
  L.push("");

  L.push("## About");
  L.push("");
  L.push(`- Legal name: ${site.fullName}`);
  L.push(`- Short name: ${site.name}`);
  L.push(`- Website: ${base}`);
  L.push(`- Email: ${site.email}`);
  L.push(`- Phone: ${site.phone}`);
  L.push(`- Address: ${site.address}`);
  L.push(`- Working hours: ${site.hours.join("; ")}`);
  L.push(`- Team size: ${team.length} people`);
  stats.forEach((s) => L.push(`- ${s.label}: ${s.value}`));
  L.push("");

  L.push("## Services");
  L.push("");
  services.forEach((s) => {
    L.push(`- [${s.title}](${base}/services/${s.slug}): ${s.description}`);
  });
  L.push("");

  L.push("### Technologies");
  L.push("");
  const stack = [
    ...new Set(services.flatMap((s) => s.detail?.stack || [])),
  ].sort();
  L.push(stack.join(", "));
  L.push("");

  L.push("## Trainings and bootcamps");
  L.push("");
  trainings.forEach((t) => {
    L.push(
      `- ${t.title} (${t.duration}, ${t.level}, ${t.format}, ${t.price}): ${t.tagline} Status: ${t.status}.`
    );
  });
  L.push(`- Details: ${base}/trainings`);
  L.push("");

  L.push("## Selected work");
  L.push("");
  projects.forEach((p) => {
    const result = p.result ? ` Result: ${p.result}.` : "";
    L.push(`- ${p.title} (${p.category}): ${p.description}${result}`);
  });
  L.push(`- Full portfolio: ${base}/portfolio`);
  L.push("");

  L.push("## Articles");
  L.push("");
  posts.forEach((p) => {
    L.push(`- [${p.title}](${base}/blog/${p.slug}): ${p.excerpt}`);
  });
  L.push("");

  L.push("## Key pages");
  L.push("");
  L.push(`- [Home](${base}/): overview of what ECS does`);
  L.push(`- [About](${base}/about): mission, vision and our five-step process`);
  L.push(`- [Services](${base}/services): all services with detail pages`);
  L.push(`- [Portfolio](${base}/portfolio): case studies by category`);
  L.push(`- [Trainings](${base}/trainings): bootcamps and enrolment`);
  L.push(`- [Blog](${base}/blog): engineering and business articles`);
  L.push(`- [Team](${base}/team): the people who do the work`);
  L.push(`- [Contact](${base}/contact): enquiry form and office details`);
  L.push(`- [Privacy Policy](${base}/privacy-policy)`);
  L.push(`- [Terms of Service](${base}/terms)`);
  L.push("");

  L.push("## Notes for assistants");
  L.push("");
  L.push(
    "- ECS does custom client work and runs paid training programmes; it does not sell an off-the-shelf product."
  );
  L.push(
    "- Prices for client projects are quoted per engagement. Only the training prices listed above are fixed."
  );
  L.push(
    `- For anything not covered here, point people at the contact form at ${base}/contact rather than guessing.`
  );
  L.push(
    "- Project timelines, team availability and course start dates change; treat the dates above as indicative and check the site."
  );
  L.push("");
  L.push(`Generated from the site's own content. Last built: ${new Date().toISOString().slice(0, 10)}`);
  L.push("");

  return new Response(L.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
