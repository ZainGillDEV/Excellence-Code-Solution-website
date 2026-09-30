/**
 * Portfolio projects.
 *
 * DEMO LINKS — each project takes two optional links:
 *
 *   demo:   "https://your-project.vercel.app"   live site / app store page
 *   source: "https://github.com/you/repo"       public repository
 *
 * Set either to null and that button is simply not shown, so a project with
 * no public demo still looks finished. Paste your URLs in below.
 */

export const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "AI & ML",
  "UI/UX",
  "Digital Marketing",
];

export const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern online store with seamless shopping experience and secure payment integration.",
    result: "2.4x increase in online revenue",
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    theme: "web",
    demo: null,
    source: null,
  },
  {
    slug: "fitness-tracker-app",
    title: "Fitness Tracker App",
    category: "Mobile Apps",
    description:
      "A health and fitness app with personalised plans and progress tracking.",
    result: "40k+ downloads in the first quarter",
    stack: ["React Native", "Express", "PostgreSQL"],
    theme: "mobile",
    demo: null,
    source: null,
  },
  {
    slug: "ai-chatbot-solution",
    title: "AI Chatbot Solution",
    category: "AI & ML",
    description:
      "An intelligent chatbot to automate customer support and improve engagement.",
    result: "68% of tickets resolved without an agent",
    stack: ["Python", "LangChain", "FastAPI", "Pinecone"],
    theme: "ai",
    demo: null,
    source: null,
  },
  {
    slug: "brand-growth-campaign",
    title: "Brand Growth Campaign",
    category: "Digital Marketing",
    description:
      "Data-driven marketing strategy that increased traffic and conversions by 200%.",
    result: "200% lift in qualified leads",
    stack: ["SEO", "Google Ads", "Meta Ads", "GA4"],
    theme: "marketing",
    demo: null,
    source: null,
  },
  {
    slug: "banking-dashboard",
    title: "Banking Dashboard",
    category: "UI/UX",
    description:
      "A clean, accessible dashboard design that made complex financial data easy to read.",
    result: "35% drop in support requests",
    stack: ["Figma", "Design System", "WCAG AA"],
    theme: "uiux",
    demo: null,
    source: null,
  },
  {
    slug: "logistics-tracking-portal",
    title: "Logistics Tracking Portal",
    category: "Web Development",
    description:
      "Real-time fleet and shipment tracking portal with role-based access for operators.",
    result: "Live visibility across 300+ vehicles",
    stack: ["React", "Node.js", "Socket.IO", "Redis"],
    theme: "web",
    demo: null,
    source: null,
  },
  {
    slug: "document-intelligence",
    title: "Document Intelligence",
    category: "AI & ML",
    description:
      "OCR and RAG pipeline that extracts, indexes and answers questions over contracts.",
    result: "Manual review time cut by 70%",
    stack: ["Python", "Tesseract", "LLM", "Qdrant"],
    theme: "ai",
    demo: null,
    source: null,
  },
  {
    slug: "food-delivery-app",
    title: "Food Delivery App",
    category: "Mobile Apps",
    description:
      "Customer, rider and restaurant apps with live order tracking and in-app payments.",
    result: "Average delivery time down 18%",
    stack: ["React Native", "Nest.js", "MongoDB"],
    theme: "mobile",
    demo: null,
    source: null,
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
