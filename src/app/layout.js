import { Inter, Poppins, Caveat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.fullName}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "AI machine learning",
    "UI UX design",
    "cloud solutions",
    "Pakistan software house",
  ],
  openGraph: {
    title: `${site.name} — ${site.fullName}`,
    description: site.description,
    url: site.url,
    siteName: site.fullName,
    type: "website",
    images: ["/og-image.png"],
  },
  // Favicons come from src/app/icon.png and src/app/apple-icon.png,
  // which Next.js wires up automatically.
};

export const viewport = {
  themeColor: "#8159af",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${caveat.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
