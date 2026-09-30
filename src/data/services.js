export const services = [
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    short: "Intelligent solutions for a smarter future.",
    description:
      "Intelligent solutions that automate, analyse and make better decisions — RAG chatbots, agentic workflows, computer vision and predictive models.",
    icon: "bi-cpu",
    featured: true,
    features: [
      "RAG chatbots & LLM integration",
      "Agentic automation workflows",
      "Computer vision & OCR",
      "Predictive analytics models",
    ],
    detail: {
      tagline: "From a promising idea to a model that earns its keep in production.",
      intro:
        "Most AI projects stall between the demo and the deployment. We build the unglamorous parts properly — the data pipeline, the evaluation harness, the guardrails, the cost controls — so the system you launch keeps working after the launch. Every engagement starts with the question most vendors skip: is AI actually the right tool for this problem?",
      offerings: [
        {
          icon: "bi-chat-square-text",
          title: "RAG Chatbots & Assistants",
          text: "Assistants that answer from your own documents, policies and data, with citations so staff and customers can check the source. We handle chunking, embeddings, retrieval quality and the evaluation set that proves it works.",
        },
        {
          icon: "bi-diagram-3",
          title: "Agentic Workflows",
          text: "Multi-step automations that use your tools — reading an inbox, pulling a record, drafting a reply, filing the result. Built with retries, human approval gates and hard cost caps so a loop can never run away with your budget.",
        },
        {
          icon: "bi-eye",
          title: "Computer Vision & OCR",
          text: "Image and document understanding: defect detection, damage assessment, form and invoice extraction, ID verification. Trained on your data, measured against your acceptance criteria.",
        },
        {
          icon: "bi-graph-up",
          title: "Predictive Models",
          text: "Forecasting demand, churn, pricing and risk from your historical data — with honest error bars and a plain explanation of what the model can and cannot tell you.",
        },
        {
          icon: "bi-plug",
          title: "LLM Integration",
          text: "Adding AI to a product you already run: a summariser, a search box that understands questions, a drafting assistant. Provider-agnostic, so you are never locked to one vendor's pricing.",
        },
        {
          icon: "bi-shield-check",
          title: "Evaluation & Guardrails",
          text: "A test set that reflects real usage, automated scoring on every change, prompt-injection defences, PII redaction and audit logs. This is what separates a demo from a system you can defend.",
        },
      ],
      stack: [
        "Python",
        "PyTorch",
        "LangChain",
        "LangGraph",
        "FastAPI",
        "OpenAI / Anthropic APIs",
        "Ollama",
        "Pinecone",
        "Qdrant",
        "pgvector",
        "Hugging Face",
        "Docker",
      ],
      useCases: [
        {
          icon: "bi-headset",
          title: "Customer support that scales",
          text: "A retailer cut first-response time from hours to seconds with a RAG assistant grounded in their returns policy and order data — and routed anything uncertain straight to a human.",
        },
        {
          icon: "bi-file-earmark-text",
          title: "Document processing",
          text: "Contracts, invoices and claim forms read, extracted and indexed automatically, with a confidence score that decides what a person still needs to check.",
        },
        {
          icon: "bi-search",
          title: "Search that understands intent",
          text: "Internal knowledge bases where staff ask a question in plain language instead of guessing the right keyword.",
        },
        {
          icon: "bi-speedometer2",
          title: "Operational forecasting",
          text: "Stock, staffing and cash-flow projections built from your own history rather than a generic industry template.",
        },
      ],
      process: [
        {
          title: "Feasibility check",
          text: "We look at your data and tell you honestly whether AI helps here, what accuracy is realistic, and what it will cost to run each month.",
        },
        {
          title: "Prototype",
          text: "A working slice on your real data within two to three weeks, with an evaluation set so 'it seems better' becomes a number.",
        },
        {
          title: "Harden",
          text: "Guardrails, rate limits, cost caps, logging, fallbacks and a human-in-the-loop path for the cases the model should not decide alone.",
        },
        {
          title: "Ship & monitor",
          text: "Deployment, dashboards for quality and spend, and a retraining or re-evaluation schedule so performance does not quietly drift.",
        },
      ],
      faqs: [
        {
          q: "Will our data be used to train someone else's model?",
          a: "No. We use enterprise API tiers with training disabled by contract, or run open models on your own infrastructure. Which of the two we recommend depends on your sensitivity requirements and budget, and we will explain the trade-off before you commit.",
        },
        {
          q: "How much does it cost to run each month?",
          a: "It depends on volume and the model tier, and we model this before you build, not after. A typical internal assistant for a small team runs on a modest monthly budget; a customer-facing system at scale costs more, which is why cost caps and caching are part of the build rather than an afterthought.",
        },
        {
          q: "What if the model gets something wrong?",
          a: "It will, sometimes — any honest vendor says so. The engineering question is what happens next: confidence thresholds, citations the user can check, a human approval step for consequential actions, and logs that let you find out why.",
        },
        {
          q: "Do we need a huge dataset to start?",
          a: "For RAG and LLM work, usually not — your existing documents are often enough. For custom vision or predictive models you do need labelled examples, and part of the feasibility check is telling you how many before you spend anything.",
        },
      ],
    },
  },
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
    detail: {
      tagline: "Software shaped around how your business actually works.",
      intro:
        "Off-the-shelf software makes you change your process to fit the tool. Custom software does the opposite. We build the systems that carry your operations — internal tools, ERP modules, customer portals, full SaaS products — with the tests, documentation and deployment pipeline that let another developer pick it up later.",
      offerings: [
        { icon: "bi-window-stack", title: "Custom Applications", text: "Web and desktop tools built for one job and built to do it well." },
        { icon: "bi-box-seam", title: "SaaS Products", text: "Multi-tenant platforms with billing, roles, onboarding and admin tooling from day one." },
        { icon: "bi-plug", title: "APIs & Integrations", text: "Clean REST and GraphQL APIs, plus the connectors that make your existing tools talk to each other." },
        { icon: "bi-arrow-repeat", title: "Legacy Modernisation", text: "Moving an ageing system forward in stages, without a big-bang rewrite that halts the business." },
      ],
      stack: ["Node.js", "Next.js", "React", "Express", "Nest.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker"],
      useCases: [
        { icon: "bi-kanban", title: "Internal operations tools", text: "Replacing spreadsheets and manual handoffs with one system the whole team works in." },
        { icon: "bi-people", title: "Customer portals", text: "Self-service accounts, order tracking and document access that cut support load." },
      ],
    },
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
    detail: {
      tagline: "Sites that load fast, rank well and convert.",
      intro:
        "A website earns its cost through speed, search visibility and conversion — not through how many animations it has. We build on Next.js for server rendering and Core Web Vitals, wire up a CMS your team can actually use, and measure the result against your goals rather than a design award.",
      offerings: [
        { icon: "bi-lightning-charge", title: "Performance First", text: "Server rendering, image optimisation and a real Core Web Vitals budget, not a promise." },
        { icon: "bi-search", title: "SEO Foundations", text: "Semantic markup, metadata, sitemaps, structured data and clean URLs built in from the start." },
        { icon: "bi-cart", title: "E-Commerce", text: "Storefronts with secure payments, inventory and an admin your team can run without us." },
        { icon: "bi-pencil-square", title: "CMS Integration", text: "Content editing that does not require a developer for every copy change." },
      ],
      stack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind", "Bootstrap", "Stripe", "Sanity", "Vercel"],
      useCases: [
        { icon: "bi-shop", title: "Online stores", text: "From a first storefront to a catalogue with thousands of SKUs." },
        { icon: "bi-megaphone", title: "Marketing sites", text: "Campaign pages and company sites that load fast on a phone on mobile data." },
      ],
    },
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
    detail: {
      tagline: "One codebase where that makes sense, native where it does not.",
      intro:
        "Most apps do not need to be native — and the ones that do, genuinely do. We start by asking which camp yours is in, then build accordingly: React Native for speed to market and a shared codebase, native Swift or Kotlin when you need the hardware, the frame rate or the platform APIs.",
      offerings: [
        { icon: "bi-phone", title: "Cross-Platform", text: "React Native apps that ship to both stores from one codebase." },
        { icon: "bi-apple", title: "Native Builds", text: "Swift and Kotlin when performance or deep platform access is the requirement." },
        { icon: "bi-cloud-slash", title: "Offline First", text: "Apps that keep working on a weak connection and sync cleanly when it returns." },
        { icon: "bi-rocket-takeoff", title: "Store Launch", text: "Review guidelines, store listings, screenshots and the release pipeline." },
      ],
      stack: ["React Native", "Expo", "Swift", "Kotlin", "Firebase", "Nest.js", "PostgreSQL"],
      useCases: [
        { icon: "bi-truck", title: "Field and delivery apps", text: "Built for patchy coverage, with offline queues and background sync." },
        { icon: "bi-heart-pulse", title: "Consumer apps", text: "Onboarding, push notifications and in-app purchases that do not annoy people." },
      ],
    },
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
    detail: {
      tagline: "Design that answers a question, not just decorates a screen.",
      intro:
        "Good design work starts before anyone opens Figma: who uses this, what are they trying to finish, and where do they currently give up? We research, wireframe, prototype and test, then hand over a design system your developers can build from without guessing at spacing.",
      offerings: [
        { icon: "bi-people", title: "User Research", text: "Interviews, usability tests and journey maps that show where people actually struggle." },
        { icon: "bi-bounding-box", title: "Wireframes", text: "Structure and flow settled before a single colour decision is made." },
        { icon: "bi-palette", title: "High-Fidelity UI", text: "Interfaces with real hierarchy, accessible contrast and a considered type scale." },
        { icon: "bi-boxes", title: "Design Systems", text: "Reusable components and tokens so the tenth screen looks like the first." },
      ],
      stack: ["Figma", "Design Tokens", "WCAG AA", "Prototyping", "Usability Testing"],
      useCases: [
        { icon: "bi-bar-chart", title: "Dashboards", text: "Dense data made scannable, with state visible at a glance." },
        { icon: "bi-arrow-repeat", title: "Redesigns", text: "Fixing the drop-off in an existing flow rather than restyling the whole product." },
      ],
    },
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
    detail: {
      tagline: "Infrastructure that scales up when you need it and costs less when you don't.",
      intro:
        "Cloud bills grow quietly. We set up infrastructure as code, deployment pipelines that anyone on the team can run, monitoring that tells you about a problem before your customers do, and cost alerts that make a surprise invoice much less likely.",
      offerings: [
        { icon: "bi-cloud-upload", title: "Cloud Deployment", text: "AWS, Azure, Vercel or Render, picked for your workload rather than habit." },
        { icon: "bi-box", title: "Containers", text: "Docker and Kubernetes where the scale justifies it — and something simpler where it does not." },
        { icon: "bi-arrow-left-right", title: "CI/CD", text: "Automated tests, preview environments and one-command deploys." },
        { icon: "bi-cash-coin", title: "Cost Control", text: "Right-sizing, autoscaling and budget alarms, with a monthly figure you can plan around." },
      ],
      stack: ["AWS", "Azure", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Grafana"],
      useCases: [
        { icon: "bi-graph-up-arrow", title: "Scaling up", text: "Handling a launch or a seasonal spike without falling over." },
        { icon: "bi-shield-lock", title: "Hardening", text: "Backups, access control and disaster recovery that has actually been tested." },
      ],
    },
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
    detail: {
      tagline: "Measured against revenue, not impressions.",
      intro:
        "Reach and engagement are easy to buy and hard to bank. We set up tracking that ties spend to actual outcomes first, then run search, content and paid campaigns against that — and tell you when a channel is not working instead of quietly reallocating budget.",
      offerings: [
        { icon: "bi-search", title: "SEO & Content", text: "Technical fixes, keyword strategy and content that answers real search intent." },
        { icon: "bi-badge-ad", title: "Paid Campaigns", text: "Google and Meta ads with proper conversion tracking and honest attribution." },
        { icon: "bi-funnel", title: "Automation", text: "Email and lifecycle funnels that follow up without being a nuisance." },
        { icon: "bi-clipboard-data", title: "Reporting", text: "GA4 and dashboards that show cost per acquisition, not just traffic." },
      ],
      stack: ["GA4", "Google Ads", "Meta Ads", "Search Console", "Looker Studio", "HubSpot"],
      useCases: [
        { icon: "bi-shop-window", title: "E-commerce growth", text: "Product feeds, shopping campaigns and abandoned-cart recovery." },
        { icon: "bi-building", title: "B2B lead generation", text: "Content and search built around a long, considered buying cycle." },
      ],
    },
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
    detail: {
      tagline: "A roadmap your team can execute, not a slide deck.",
      intro:
        "Plenty of consultancies deliver a strategy document nobody can act on. We look at your actual codebase, infrastructure and team, then write down what to fix first, what can wait, and what to leave alone — with effort estimates a developer would recognise.",
      offerings: [
        { icon: "bi-clipboard-check", title: "Technology Audit", text: "An honest read on your stack, its risks and what it costs you to keep." },
        { icon: "bi-diagram-2", title: "Architecture Review", text: "Where the system will break as you grow, and what to change before it does." },
        { icon: "bi-signpost-split", title: "Roadmaps", text: "Sequenced, estimated and prioritised by business impact." },
        { icon: "bi-mortarboard", title: "Team Mentoring", text: "Upskilling your developers so the improvement outlasts the engagement." },
      ],
      stack: ["Architecture Review", "Code Audit", "Threat Modelling", "Cost Analysis", "Team Training"],
      useCases: [
        { icon: "bi-question-circle", title: "Build or buy", text: "An independent view when the vendor demo looks too good." },
        { icon: "bi-speedometer", title: "Slow delivery", text: "Finding why shipping takes months and what would actually shorten it." },
      ],
    },
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
