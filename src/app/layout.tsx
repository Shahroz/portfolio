import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile, siteConfig } from "@/data/portfolioData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const title = `${profile.name} — ${profile.title}`;
const description = profile.summary.slice(0, 160);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "Agentic AI Developer",
    "Full Stack Developer",
    "Rust Developer",
    "React Developer",
    "AI Engineer",
    "Senior Development Manager",
    "LLM Integration",
    "Shahroz Allauddin",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title,
    description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteConfig.url,
  sameAs: [profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  knowsAbout: [
    "Agentic AI",
    "LLM Orchestration",
    "Rust",
    "React",
    "Angular",
    "Node.js",
    "AWS",
    "Full Stack Development",
    "Engineering Management",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
