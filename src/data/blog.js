/**
 * Blog posts.
 *
 * To add a post: copy one of these objects, give it a unique `slug`, and
 * write the `body` as an array of blocks. Supported block types:
 *
 *   { type: "p",      text: "..." }              paragraph
 *   { type: "h2",     text: "..." }              section heading
 *   { type: "list",   items: ["...", "..."] }    bulleted list
 *   { type: "quote",  text: "...", cite: "..." } pull quote
 *   { type: "code",   lang: "js", text: "..." }  code block
 *
 * Newest post first — that is the order they appear on /blog.
 */

export const categories = [
  "All",
  "AI & ML",
  "Web Development",
  "Mobile",
  "Design",
  "Business",
];

export const posts = [
  {
    slug: "rag-chatbot-mistakes",
    title: "Five Mistakes That Sink a RAG Chatbot",
    excerpt:
      "Retrieval-augmented generation looks simple in a demo and gets hard in production. Here is where most projects go wrong, and what to do instead.",
    category: "AI & ML",
    author: "Engineering Team",
    date: "2026-09-18",
    readingTime: "7 min read",
    theme: "ai",
    tags: ["RAG", "LLM", "Production"],
    body: [
      {
        type: "p",
        text: "A retrieval-augmented chatbot is the easiest AI project to demo and one of the harder ones to run well. The demo works because you tested it with the three questions you had in mind. Production breaks because real users ask the other three hundred.",
      },
      {
        type: "p",
        text: "These are the five failures we see most often when we are called in to fix someone else's assistant.",
      },
      { type: "h2", text: "1. Chunking by character count" },
      {
        type: "p",
        text: "Splitting documents every 500 characters is the default in most tutorials, and it cuts sentences, tables and clauses in half. The retriever then returns a fragment that is missing the part that mattered. Split on structure instead — headings, sections, list items — and keep a little overlap so a chunk that starts mid-thought still carries its context.",
      },
      { type: "h2", text: "2. No evaluation set" },
      {
        type: "p",
        text: "If you cannot say whether last week's prompt change made things better or worse, you are not engineering, you are guessing. Write down fifty real questions with their correct answers before you tune anything. It takes an afternoon and it converts every later argument about quality into a number.",
      },
      { type: "h2", text: "3. Trusting the model to say 'I don't know'" },
      {
        type: "p",
        text: "Language models are obliging. Asked something the documents do not cover, many will produce a confident, plausible, wrong answer. Set a retrieval confidence threshold, and when nothing relevant comes back, return a real fallback — a support link, a phone number, a human — rather than letting the model improvise.",
      },
      { type: "h2", text: "4. Ignoring the cost curve" },
      {
        type: "p",
        text: "Token costs are invisible until the month the usage triples. Cache aggressively, use a smaller model for classification and routing, reserve the expensive model for generation, and put a hard spend cap in the code rather than relying on a billing alert that arrives after the fact.",
      },
      { type: "h2", text: "5. Shipping without citations" },
      {
        type: "p",
        text: "Citations are not a nice-to-have. They are how a user checks the answer, how your support team debugs a complaint, and how you find out the source document was out of date. Every answer should point at the passage it came from.",
      },
      {
        type: "quote",
        text: "The gap between a demo and a product is almost entirely made of the cases you did not think to test.",
      },
      { type: "h2", text: "A short checklist" },
      {
        type: "list",
        items: [
          "Chunk on structure, not on character count",
          "Write fifty evaluation questions before tuning anything",
          "Set a retrieval confidence threshold with a real fallback",
          "Cache, route to cheaper models, and cap spend in code",
          "Return citations with every answer",
        ],
      },
      {
        type: "p",
        text: "None of this is exotic. It is the ordinary engineering that turns an impressive demo into something you can put in front of customers without watching it nervously.",
      },
    ],
  },
  {
    slug: "nextjs-performance-checklist",
    title: "The Next.js Performance Checklist We Run Before Every Launch",
    excerpt:
      "Core Web Vitals decide how your site ranks and how it feels. Here is the list we work through before a client site goes live.",
    category: "Web Development",
    author: "Engineering Team",
    date: "2026-09-05",
    readingTime: "6 min read",
    theme: "web",
    tags: ["Next.js", "Performance", "SEO"],
    body: [
      {
        type: "p",
        text: "A site that takes four seconds to become usable on a mid-range phone will lose a measurable share of its visitors, whatever the design looks like on your laptop. Before any site we build goes live, it goes through this list.",
      },
      { type: "h2", text: "Images" },
      {
        type: "p",
        text: "Use the framework's image component so sizes, formats and lazy loading are handled. Set an explicit width and height on everything so the layout does not jump while images arrive. Give the largest above-the-fold image priority loading and leave everything else lazy.",
      },
      { type: "h2", text: "Fonts" },
      {
        type: "p",
        text: "Self-host through the framework's font loader rather than a stylesheet link, subset to the characters you actually use, and set a fallback stack whose metrics are close to the real face so text does not reflow when the font lands.",
      },
      { type: "h2", text: "JavaScript" },
      {
        type: "list",
        items: [
          "Keep components server-side unless they need state or browser APIs",
          "Import heavy libraries dynamically, only on the pages that use them",
          "Check the bundle analyser before launch, not after a complaint",
          "Drop any dependency you added for one small function",
        ],
      },
      { type: "h2", text: "Rendering" },
      {
        type: "p",
        text: "Static-generate anything that does not change per request. Cache what can be cached. Reserve server rendering for pages that genuinely need fresh data, and stream the slow parts so the shell paints immediately.",
      },
      { type: "h2", text: "Measure on a real device" },
      {
        type: "p",
        text: "Your development machine on office wifi is the most flattering possible test. Run Lighthouse with mobile throttling, then open the site on an actual mid-range phone on mobile data. The second test is the one that tells you the truth.",
      },
    ],
  },
  {
    slug: "choosing-mobile-stack",
    title: "React Native or Native? A Straight Answer",
    excerpt:
      "The honest version of a question every client asks — with the cases where each option is clearly right and where it clearly is not.",
    category: "Mobile",
    author: "Engineering Team",
    date: "2026-08-22",
    readingTime: "5 min read",
    theme: "mobile",
    tags: ["React Native", "iOS", "Android"],
    body: [
      {
        type: "p",
        text: "Agencies tend to recommend whichever stack they already know. Here is the version we would give a friend.",
      },
      { type: "h2", text: "Choose React Native when" },
      {
        type: "list",
        items: [
          "The app is mostly screens, forms, lists and API calls",
          "You need both platforms and you have one team",
          "Time to market matters more than the last ten percent of polish",
          "You expect to iterate quickly after launch",
        ],
      },
      { type: "h2", text: "Choose native when" },
      {
        type: "list",
        items: [
          "You need sustained high frame rates — games, camera effects, AR",
          "You depend on platform APIs that arrive first on native",
          "Background processing, deep OS integration or a widget-heavy experience",
          "The app is your entire product and will be maintained for years",
        ],
      },
      { type: "h2", text: "The honest middle" },
      {
        type: "p",
        text: "Most business apps sit comfortably in the first list. The failure case we see is not choosing wrong at the start — it is refusing to reconsider when one screen clearly needs native performance. A React Native app can host a native module for that one screen. That is a normal architecture, not an admission of defeat.",
      },
      {
        type: "quote",
        text: "Pick the stack that fits the app you are building, then stay willing to make an exception for the one screen that needs it.",
      },
    ],
  },
  {
    slug: "design-system-small-team",
    title: "A Design System Small Teams Will Actually Use",
    excerpt:
      "Most design systems die because they were built for a team ten times the size. Here is the smallest version that still works.",
    category: "Design",
    author: "Design Team",
    date: "2026-08-08",
    readingTime: "5 min read",
    theme: "uiux",
    tags: ["Design Systems", "Figma", "UI"],
    body: [
      {
        type: "p",
        text: "A design system fails when maintaining it costs more than ignoring it. For a team of three to ten, you do not need a hundred documented components. You need the handful of decisions that stop every new screen becoming a fresh argument.",
      },
      { type: "h2", text: "Start with four things" },
      {
        type: "list",
        items: [
          "A colour palette with named roles, not just hex values",
          "A type scale with a fixed number of steps",
          "A spacing scale — one unit, multiplied",
          "A border radius and shadow pair, used consistently",
        ],
      },
      {
        type: "p",
        text: "That is enough to make ten screens look like one product. Components come later, and only the ones you have already built twice.",
      },
      { type: "h2", text: "Name by role, not by appearance" },
      {
        type: "p",
        text: "A token called 'purple-500' tells you nothing about where to use it and becomes a lie the day the brand changes. 'primary', 'surface', 'border', 'text-muted' survive a rebrand and tell the next developer what the colour is for.",
      },
      { type: "h2", text: "Write down the exceptions" },
      {
        type: "p",
        text: "Every system gets broken somewhere. Recording where and why — 'the marketing hero uses a larger scale, deliberately' — stops the exception spreading quietly into the rest of the product.",
      },
    ],
  },
  {
    slug: "software-quote-questions",
    title: "Seven Questions to Ask Before Accepting a Software Quote",
    excerpt:
      "What to ask any development agency, including us, before signing. The answers tell you more than the price does.",
    category: "Business",
    author: "Excellence Code Solution",
    date: "2026-07-25",
    readingTime: "6 min read",
    theme: "marketing",
    tags: ["Hiring", "Process", "Contracts"],
    body: [
      {
        type: "p",
        text: "Two quotes for the same project can differ by a factor of three, and the cheaper one is not automatically worse. These questions surface what the number actually covers.",
      },
      { type: "h2", text: "1. Who owns the code?" },
      {
        type: "p",
        text: "The answer should be: you do, from the first commit, in your own repository. Anything else is a decision you want to make deliberately rather than discover later.",
      },
      { type: "h2", text: "2. What happens when the scope changes?" },
      {
        type: "p",
        text: "It will change. Ask how that is priced and who decides. A vague answer here is where most project disputes begin.",
      },
      { type: "h2", text: "3. What is not included?" },
      {
        type: "p",
        text: "Hosting, domains, third-party licences, app-store fees, content, photography, ongoing maintenance. A quote that does not mention these is not cheaper — it is less complete.",
      },
      { type: "h2", text: "4. Who is actually doing the work?" },
      {
        type: "p",
        text: "You may meet a senior developer in the pitch and get a junior on delivery. That can be fine, if it is disclosed and priced accordingly.",
      },
      { type: "h2", text: "5. How will I see progress?" },
      {
        type: "p",
        text: "Weekly demos on a staging URL beat status reports. If you cannot click the thing, you do not know where the project is.",
      },
      { type: "h2", text: "6. What does month two look like?" },
      {
        type: "p",
        text: "Handover, documentation, bug-fix window, support terms. Most of a system's life happens after launch.",
      },
      { type: "h2", text: "7. Can I talk to a client you delivered for last year?" },
      {
        type: "p",
        text: "Not this month — last year. How a project looks twelve months on is the part a case study never shows.",
      },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
