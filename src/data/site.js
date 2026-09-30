export const site = {
  name: "ECS",
  fullName: "Excellence Code Solution",
  tagline: "Excellence Code Solution",
  description:
    "We build modern, scalable and innovative software solutions to help your business grow and succeed in the digital world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://excellencecodesolution.com",
  founded: "2020",
  email: "hello@excellencecodesolution.com",
  emailNote: "We reply within 24 hours",
  phone: "+92 300 123 4567",
  phoneNote: "Mon - Fri from 9am to 6pm",
  address: "123 Business Street, Lahore, Pakistan",
  hours: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"],
  mapQuery: "Lahore,Pakistan",
  socials: [
    { label: "LinkedIn", icon: "bi-linkedin", href: "https://linkedin.com" },
    { label: "Twitter", icon: "bi-twitter-x", href: "https://twitter.com" },
    { label: "Instagram", icon: "bi-instagram", href: "https://instagram.com" },
    { label: "Facebook", icon: "bi-facebook", href: "https://facebook.com" },
  ],
};

/**
 * Top-level navigation. An entry with `children` renders as a dropdown;
 * its own `href` stays clickable on desktop and on mobile.
 */
export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about", icon: "bi-book" },
      { label: "Our Team", href: "/team", icon: "bi-people" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services", icon: "bi-grid-3x3-gap" },
      {
        label: "AI & Machine Learning",
        href: "/services/ai-machine-learning",
        icon: "bi-cpu",
        featured: true,
      },
      {
        label: "Software Development",
        href: "/services/software-development",
        icon: "bi-window-stack",
      },
      {
        label: "Web Development",
        href: "/services/web-development",
        icon: "bi-globe2",
      },
      { label: "Mobile Apps", href: "/services/mobile-apps", icon: "bi-phone" },
      { label: "UI/UX Design", href: "/services/ui-ux-design", icon: "bi-palette" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions", icon: "bi-cloud" },
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
        icon: "bi-send",
      },
      { label: "IT Consulting", href: "/services/it-consulting", icon: "bi-gear" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Trainings", href: "/trainings" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Footer link columns. */
export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
      { label: "Software Development", href: "/services/software-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Trainings & Bootcamps", href: "/trainings" },
      { label: "Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "llms.txt", href: "/llms.txt", external: true },
    ],
  },
];

export const subjects = [
  "General Enquiry",
  "Software Development",
  "Web Development",
  "Mobile Apps",
  "AI & Machine Learning",
  "UI/UX Design",
  "Cloud Solutions",
  "Digital Marketing",
  "IT Consulting",
  "Training & Bootcamps",
  "Careers",
];
