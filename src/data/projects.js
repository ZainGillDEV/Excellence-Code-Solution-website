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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
