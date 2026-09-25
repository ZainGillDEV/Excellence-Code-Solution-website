export const services = [
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom software solutions for your unique needs.",
    description:
      "Custom software built around your workflow — from internal tools and ERP modules to full SaaS platforms, engineered to scale with your business.",
    icon: "bi-window-stack",
    features: [
      "Custom web & desktop applications",
      "SaaS product engineering",
      "API design and integrations",
      "Legacy system modernisation",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Modern, responsive websites that perform.",
    description:
      "Modern, responsive websites that deliver real results — fast, SEO-friendly and built on Next.js, React and Node.js.",
    icon: "bi-globe2",
    features: [
      "Next.js & React front-ends",
      "Node.js / Express back-ends",
      "E-commerce and CMS builds",
      "Core Web Vitals optimisation",
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    short: "Powerful iOS & Android apps that users love.",
    description:
      "iOS and Android apps that are fast, secure and user-friendly, built once with React Native or natively when performance demands it.",
    icon: "bi-phone",
    features: [
      "React Native cross-platform apps",
      "Native iOS and Android builds",
      "Offline-first architecture",
      "App Store & Play Store launch",
    ],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    short: "Intelligent solutions for a smarter future.",
    description:
      "Intelligent solutions that automate, analyse and make better decisions — RAG chatbots, agentic workflows, computer vision and predictive models.",
    icon: "bi-cpu",
    features: [
      "RAG chatbots & LLM integration",
      "Agentic automation workflows",
      "Computer vision & OCR",
      "Predictive analytics models",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Grow your brand and reach more customers.",
    description:
      "Grow your brand with data-driven marketing strategies across search, social and paid channels — measured against revenue, not vanity metrics.",
    icon: "bi-send",
    features: [
      "SEO and content strategy",
      "Paid search & social campaigns",
      "Marketing automation funnels",
      "Analytics and reporting",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Beautiful and user-friendly designs that convert.",
    description:
      "User-centric designs that create better experiences and higher conversions, from research and wireframes to a polished design system.",
    icon: "bi-palette",
    features: [
      "User research & wireframing",
      "High-fidelity UI design",
      "Interactive prototypes",
      "Design systems & handoff",
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    short: "Scalable and secure cloud infrastructure.",
    description:
      "Scalable and secure cloud infrastructure for your business on AWS, Azure or Vercel — with CI/CD, monitoring and cost control built in.",
    icon: "bi-cloud",
    features: [
      "AWS / Azure / Vercel deployment",
      "Docker & Kubernetes setup",
      "CI/CD pipelines",
      "Monitoring and cost optimisation",
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    short: "Expert guidance for your digital transformation.",
    description:
      "Expert guidance for your digital transformation journey — technology audits, architecture reviews and a roadmap your team can actually execute.",
    icon: "bi-gear",
    features: [
      "Technology audits",
      "Architecture & code reviews",
      "Digital transformation roadmaps",
      "Team training & mentoring",
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
