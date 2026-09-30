/**
 * Team members, in the order they appear on /team.
 *
 * `rank` drives the layout:
 *   1 → CEO        full-width leadership card, shown first
 *   2 → Manager    full-width leadership card, shown second (mirrored)
 *   3 → everyone else, shown in the grid below
 *
 * PHOTOS — each member takes a `photo` field. Two ways to set it:
 *
 *   1. base64 (no extra file):
 *        photo: "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
 *   2. a file in /public/team/:
 *        photo: "/team/nabeel.jpg"
 *
 * Leave `photo` as null and a lettered avatar is drawn instead, so the page
 * always looks finished.
 */

export const team = [
  {
    name: "Nabeel Mughal",
    role: "Chief Executive Officer",
    rank: 1,
    photo: null,
    bio: "Founded ECS and leads its direction — which work we take on, how we price it, and the standard everything ships against. Still reads the proposals before they go out.",
    focus: ["Strategy", "Client Partnerships", "Delivery"],
    socials: [
      { icon: "bi-linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      {
        icon: "bi-envelope",
        href: "mailto:hello@excellencecodesolution.com",
        label: "Email",
      },
    ],
  },
  {
    name: "Zain Ali Gill",
    role: "Manager — AI & Web",
    rank: 2,
    photo: null,
    bio: "Runs the AI and web teams day to day: scoping, architecture and code review across every RAG, agentic and Next.js project we deliver. The person your engineers will talk to most.",
    focus: ["AI & ML", "Web Development", "Team Lead", "Architecture"],
    socials: [
      { icon: "bi-linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      { icon: "bi-github", href: "https://github.com", label: "GitHub" },
    ],
  },
  {
    name: "Team Member",
    role: "Senior Full-Stack Engineer",
    rank: 3,
    photo: null,
    bio: "Builds the web products clients put their name on, from the database schema up to the last pixel.",
    focus: ["Next.js", "Node.js", "MongoDB"],
    socials: [{ icon: "bi-github", href: "https://github.com", label: "GitHub" }],
  },
  {
    name: "Team Member",
    role: "AI/ML Engineer",
    rank: 3,
    photo: null,
    bio: "Works on RAG systems, agentic workflows and computer vision — and on the evaluation sets that prove they actually work.",
    focus: ["RAG", "LangGraph", "Computer Vision"],
    socials: [{ icon: "bi-github", href: "https://github.com", label: "GitHub" }],
  },
  {
    name: "Team Member",
    role: "Mobile Engineer",
    rank: 3,
    photo: null,
    bio: "Ships iOS and Android apps with React Native, including the offline behaviour and store releases that tutorials skip.",
    focus: ["React Native", "Expo", "App Store"],
    socials: [{ icon: "bi-github", href: "https://github.com", label: "GitHub" }],
  },
  {
    name: "Team Member",
    role: "Product Designer",
    rank: 3,
    photo: null,
    bio: "Runs research, prototypes and the design system, so the tenth screen looks like it belongs with the first.",
    focus: ["UI/UX", "Design Systems", "Figma"],
    socials: [{ icon: "bi-linkedin", href: "https://linkedin.com", label: "LinkedIn" }],
  },
  {
    name: "Team Member",
    role: "Digital Marketing Lead",
    rank: 3,
    photo: null,
    bio: "Connects the work to revenue — search, content and paid campaigns measured against outcomes rather than impressions.",
    focus: ["SEO", "Paid Media", "Analytics"],
    socials: [{ icon: "bi-linkedin", href: "https://linkedin.com", label: "LinkedIn" }],
  },
];

/** Leadership first (rank 1, then 2), then everyone else. */
export const leadership = team
  .filter((m) => m.rank < 3)
  .sort((a, b) => a.rank - b.rank);

export const members = team.filter((m) => m.rank >= 3);

export const culture = [
  {
    icon: "bi-chat-square-text",
    title: "We say the hard thing",
    text: "If an idea will not work, you hear it in week one — not in the retrospective.",
  },
  {
    icon: "bi-people",
    title: "One team with yours",
    text: "Shared channels, weekly demos, and a standing invitation to look at the code.",
  },
  {
    icon: "bi-mortarboard",
    title: "We teach as we build",
    text: "Your developers should be able to maintain what we hand over. That is part of the job.",
  },
  {
    icon: "bi-clock-history",
    title: "Dates we can keep",
    text: "We would rather quote a longer timeline than miss a shorter one.",
  },
];

/** Initials for the fallback avatar. */
export const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
