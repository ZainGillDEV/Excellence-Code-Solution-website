import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${site.fullName} collects, uses and protects your personal information.`,
};

const sections = [
  {
    id: "information-we-collect",
    heading: "1. Information we collect",
    paragraphs: [
      "We collect only what we need to respond to you and to run this website.",
    ],
    list: [
      "Information you give us: your name, email address, phone number, subject and message when you submit the contact form.",
      "Information collected automatically: IP address, browser type and the pages you visit, used to keep the site secure and to understand which pages are useful.",
      "Cookies: this site uses only the cookies required for it to function. We do not use advertising or cross-site tracking cookies.",
    ],
  },
  {
    id: "how-we-use-it",
    heading: "2. How we use your information",
    paragraphs: ["We use the information you provide to:"],
    list: [
      "Reply to your enquiry and discuss your project",
      "Send you information you asked for about our services or training programmes",
      "Improve this website and the services we offer",
      "Protect the site against spam and abuse",
      "Meet our legal and accounting obligations",
    ],
  },
  {
    id: "legal-basis",
    heading: "3. Why we are allowed to use it",
    paragraphs: [
      "Where the law requires a legal basis for processing your data, ours is one of the following: your consent, given when you submit the contact form; our legitimate interest in responding to enquiries and keeping the site secure; or compliance with a legal obligation.",
      "You can withdraw consent at any time by emailing us, and we will stop processing your data unless we are required to keep it for legal reasons.",
    ],
  },
  {
    id: "sharing",
    heading: "4. Who we share it with",
    paragraphs: [
      "We do not sell your personal information, and we do not share it for advertising.",
      "We do use service providers who process data on our behalf — a hosting provider, a database provider and an email delivery provider. They are bound by contract to process your data only on our instructions.",
      "We may also disclose information where the law requires it, or where it is necessary to protect our rights or the safety of others.",
    ],
  },
  {
    id: "retention",
    heading: "5. How long we keep it",
    paragraphs: [
      "Contact enquiries are kept for up to 24 months from your last contact with us, so we can pick up a conversation where it left off. Records we are required to keep for tax or legal reasons are held for as long as the law requires.",
      "After that, data is deleted. You can ask us to delete it sooner.",
    ],
  },
  {
    id: "security",
    heading: "6. How we protect it",
    paragraphs: [
      "The site is served over HTTPS, enquiry data is stored in an access-controlled database, and administrative access is limited to the people who need it.",
      "No system is completely secure, and we will not claim otherwise. If a breach affects your personal data, we will notify you and the relevant authority as the law requires.",
    ],
  },
  {
    id: "your-rights",
    heading: "7. Your rights",
    paragraphs: [
      "Depending on where you live, you may have the right to:",
    ],
    list: [
      "Ask what personal data we hold about you and receive a copy",
      "Ask us to correct information that is wrong or incomplete",
      "Ask us to delete your data",
      "Object to or restrict how we process it",
      "Ask us to transfer your data to another provider",
      "Complain to your local data protection authority",
    ],
  },
  {
    id: "children",
    heading: "8. Children",
    paragraphs: [
      "This site is not directed at children under 16, and we do not knowingly collect their personal information. If you believe a child has given us data, contact us and we will delete it.",
    ],
  },
  {
    id: "changes",
    heading: "9. Changes to this policy",
    paragraphs: [
      "If we change this policy we will update the date at the top of this page. Material changes will be highlighted on the site.",
    ],
  },
  {
    id: "contact",
    heading: "10. Contact us",
    paragraphs: [
      `Questions about this policy, or want to exercise any of the rights above? Email ${site.email} or write to us at ${site.address}. We respond to data requests within 30 days.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="29 September 2026"
      intro={`This policy explains what information ${site.fullName} collects, why we collect it, and what you can do about it. It is written to be read, not to be skipped.`}
      sections={sections}
    />
  );
}
