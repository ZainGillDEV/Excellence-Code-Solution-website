/**
 * Trainings and bootcamps.
 *
 * Edit the cohorts, prices and syllabus below. `status` drives the badge:
 * "open" (enrolling), "soon" (waitlist) or "closed".
 */

export const trainings = [
  {
    slug: "ai-engineering-bootcamp",
    title: "AI Engineering Bootcamp",
    tagline: "Build and ship a production RAG system, not another notebook demo.",
    level: "Intermediate",
    duration: "10 weeks",
    format: "Hybrid — Lahore & online",
    commitment: "2 evenings + 1 weekend session",
    price: "PKR 65,000",
    seats: 20,
    status: "open",
    startsOn: "2026-11-03",
    icon: "bi-cpu",
    theme: "ai",
    featured: true,
    summary:
      "Ten weeks on the engineering around the model: retrieval quality, evaluation sets, guardrails, cost control and deployment. You finish with a working assistant on your own data, deployed, evaluated and documented.",
    outcomes: [
      "Build a RAG pipeline end to end — ingestion, chunking, embeddings, retrieval",
      "Write an evaluation set and score every change against it",
      "Add guardrails: prompt-injection defences, PII redaction, confidence thresholds",
      "Design agentic workflows with retries, approval gates and hard cost caps",
      "Deploy to production with monitoring for quality and spend",
    ],
    syllabus: [
      { week: "1-2", title: "Foundations", text: "How LLMs actually behave, tokenisation, context windows, and where retrieval beats fine-tuning." },
      { week: "3-4", title: "Retrieval", text: "Chunking strategies, embedding models, vector stores, hybrid and re-ranked search." },
      { week: "5-6", title: "Evaluation", text: "Building a golden set, automated scoring, regression testing prompts like code." },
      { week: "7-8", title: "Agents & Tools", text: "Tool calling, multi-step workflows, state, retries, human-in-the-loop approvals." },
      { week: "9-10", title: "Production", text: "Guardrails, caching, cost caps, observability, deployment and the final project." },
    ],
    requirements: [
      "Comfortable with Python — functions, classes, virtual environments",
      "Basic Git and command line",
      "A laptop that can run Docker",
    ],
    audience: "Developers moving into AI work, and data people who want to ship rather than prototype.",
  },
  {
    slug: "mern-fullstack-bootcamp",
    title: "MERN Full-Stack Bootcamp",
    tagline: "From your first component to a deployed, authenticated application.",
    level: "Beginner to Intermediate",
    duration: "12 weeks",
    format: "On-site — Lahore",
    commitment: "3 evenings per week",
    price: "PKR 55,000",
    seats: 25,
    status: "open",
    startsOn: "2026-10-20",
    icon: "bi-window-stack",
    theme: "web",
    summary:
      "Twelve weeks building real applications with MongoDB, Express, React and Node. You leave with three deployed projects, a portfolio that shows your work, and the Git history to prove you wrote it.",
    outcomes: [
      "Build REST APIs with Express and MongoDB, including auth and validation",
      "Write React front-ends with proper state management and data fetching",
      "Move to Next.js for server rendering, routing and SEO",
      "Test, containerise and deploy to a live URL",
      "Work the way a team does — branches, pull requests, code review",
    ],
    syllabus: [
      { week: "1-2", title: "JavaScript & Git", text: "Modern JS, async patterns, npm, and the Git workflow you will use all course." },
      { week: "3-5", title: "Backend", text: "Node, Express, MongoDB, schema design, authentication, file uploads." },
      { week: "6-8", title: "Frontend", text: "React fundamentals, hooks, forms, state, and talking to your own API." },
      { week: "9-10", title: "Next.js", text: "App Router, server components, rendering strategies, SEO and performance." },
      { week: "11-12", title: "Ship it", text: "Testing, Docker, CI/CD, deployment, and the final portfolio project." },
    ],
    requirements: [
      "Basic programming in any language",
      "Your own laptop",
      "Roughly 10 hours a week outside sessions",
    ],
    audience: "Final-year students and career switchers who want a job-ready portfolio.",
  },
  {
    slug: "mobile-app-bootcamp",
    title: "Mobile App Development Bootcamp",
    tagline: "One codebase, both stores, published before you finish.",
    level: "Intermediate",
    duration: "8 weeks",
    format: "Online — live sessions",
    commitment: "2 evenings per week",
    price: "PKR 45,000",
    seats: 18,
    status: "soon",
    startsOn: "2027-01-12",
    icon: "bi-phone",
    theme: "mobile",
    summary:
      "Eight weeks of React Native, from your first screen to an app actually published on the Play Store. Covers the parts tutorials skip: offline behaviour, push notifications, store review and release builds.",
    outcomes: [
      "Build cross-platform apps with React Native and Expo",
      "Navigation, forms, lists and animations that feel native",
      "Offline-first data with background sync",
      "Push notifications and in-app purchases",
      "Signing, store listings and shipping a release build",
    ],
    syllabus: [
      { week: "1-2", title: "Foundations", text: "Expo, components, styling, navigation and the developer workflow." },
      { week: "3-4", title: "Data", text: "APIs, local storage, offline queues, sync and error states." },
      { week: "5-6", title: "Native Features", text: "Camera, location, notifications, permissions and device APIs." },
      { week: "7-8", title: "Release", text: "Performance, testing on real devices, signing, store submission." },
    ],
    requirements: [
      "Comfortable with JavaScript and React basics",
      "A phone for testing (Android or iOS)",
    ],
    audience: "Web developers adding mobile, and anyone with an app idea they want to publish.",
  },
];

export const getTraining = (slug) => trainings.find((t) => t.slug === slug);

export const perks = [
  {
    icon: "bi-person-workspace",
    title: "Taught by working engineers",
    text: "Every session is run by someone who shipped this kind of system last month, not last decade.",
  },
  {
    icon: "bi-briefcase",
    title: "Portfolio, not certificates",
    text: "You finish with deployed projects and a public repo — the thing interviewers actually look at.",
  },
  {
    icon: "bi-people",
    title: "Small cohorts",
    text: "Capped seats so questions get answered in the session, not in a queue afterwards.",
  },
  {
    icon: "bi-briefcase-fill",
    title: "Hiring pipeline",
    text: "Top performers are interviewed for internships and roles at ECS first.",
  },
];

export const formatStart = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const statusLabel = {
  open: { text: "Enrolling now", className: "is-open" },
  soon: { text: "Waitlist open", className: "is-soon" },
  closed: { text: "Closed", className: "is-closed" },
};
