import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.fullName} website and services.`,
};

const sections = [
  {
    id: "agreement",
    heading: "1. Agreement",
    paragraphs: [
      `By using this website you agree to these terms. If you do not agree with them, please do not use the site.`,
      "These terms cover the website itself. Client projects and training enrolments are governed by a separate written agreement, and where that agreement differs from these terms, it takes precedence.",
    ],
  },
  {
    id: "services",
    heading: "2. Our services",
    paragraphs: [
      `${site.fullName} provides software development, web and mobile development, AI and machine learning engineering, design, cloud, digital marketing, IT consulting and training services.`,
      "Descriptions on this site are for information. They are not an offer, a quotation or a guarantee of a particular outcome. Scope, price, timeline and deliverables for any engagement are set out in a proposal and contract signed by both parties.",
    ],
  },
  {
    id: "acceptable-use",
    heading: "3. Acceptable use",
    paragraphs: ["When using this site, you agree not to:"],
    list: [
      "Break any applicable law or regulation",
      "Attempt to gain unauthorised access to the site, its servers or its data",
      "Submit false information, spam or malicious content through our forms",
      "Interfere with the site's operation or security, including automated scraping that degrades service",
      "Copy, resell or redistribute our content without written permission",
    ],
  },
  {
    id: "intellectual-property",
    heading: "4. Intellectual property",
    paragraphs: [
      "The content, design, logo and code of this website belong to us or our licensors, and are protected by copyright and trade mark law.",
      "Work produced for a client is a separate matter: unless the signed agreement says otherwise, the client owns the deliverables in full once the engagement is paid for. We may reference the project in our portfolio unless the agreement says otherwise.",
    ],
  },
  {
    id: "training",
    heading: "5. Training and bootcamps",
    paragraphs: [
      "Seats on a programme are confirmed on payment and are limited. Course content, schedule and instructors may change; we will notify enrolled participants of material changes in advance.",
      "Refunds are handled under the terms given at enrolment. We do not guarantee employment or any particular career outcome from completing a programme.",
    ],
  },
  {
    id: "third-party",
    heading: "6. Third-party links and services",
    paragraphs: [
      "This site may link to other websites and may rely on third-party services. We do not control them and are not responsible for their content, availability or privacy practices. Following an external link is at your own risk.",
    ],
  },
  {
    id: "disclaimer",
    heading: "7. Disclaimer",
    paragraphs: [
      "The website and its content are provided as they are. We do our best to keep information accurate and the site available, but we do not warrant that it will be error-free or uninterrupted.",
      "Nothing on this site is professional advice for your specific situation. Get advice that accounts for your circumstances before acting on anything here.",
    ],
  },
  {
    id: "liability",
    heading: "8. Limitation of liability",
    paragraphs: [
      "To the extent the law allows, we are not liable for indirect or consequential loss, lost profits, lost data or business interruption arising from your use of this website.",
      "Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.",
    ],
  },
  {
    id: "changes",
    heading: "9. Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The date at the top of this page shows the current version, and continuing to use the site after a change means you accept the updated terms.",
    ],
  },
  {
    id: "governing-law",
    heading: "10. Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Islamic Republic of Pakistan, and the courts of Lahore have exclusive jurisdiction over any dispute arising from them.",
    ],
  },
  {
    id: "contact",
    heading: "11. Contact",
    paragraphs: [
      `Questions about these terms? Email ${site.email} or write to ${site.address}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="29 September 2026"
      intro="The rules that apply when you use this website, and how they relate to a signed client or training agreement."
      sections={sections}
    />
  );
}
