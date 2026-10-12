import type { Metadata } from "next";
import SideBar from "./components/main/sidebar";
import Navbar from "./components/main/navbar";
import Footer from "./components/main/footer";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const SITE_URL = "https://aadeshkumar-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aadesh Kumar — Full-Stack Developer & AI Automation Engineer",
    template: "%s | Aadesh Kumar",
  },
  description:
    "Aadesh Kumar is a full-stack developer and AI automation engineer in Haridwar, India. Explore his Next.js products, RAG agents, n8n workflows and engineering experience.",
  keywords: [
    "Aadesh Kumar",
    "AI automation engineer",
    "software engineer",
    "technical SEO",
    "n8n developer",
    "AI agent workflows",
    "LLM orchestration",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "multi-tenant SaaS",
    "decoded person",
    "Japp Tattva",
  ],
  authors: [{ name: "Aadesh Kumar", url: SITE_URL }],
  creator: "Aadesh Kumar",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Aadesh Kumar — Full-Stack Developer & AI Automation Engineer",
    description:
      "Explore Aadesh Kumar's full-stack engineering, AI agents, n8n workflows and independent Next.js projects.",
    url: SITE_URL,
    siteName: "Aadesh Kumar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Aadesh Kumar — Full-Stack Developer & AI Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadesh Kumar — Full-Stack Developer & AI Automation Engineer",
    description:
      "Explore Aadesh Kumar's full-stack engineering, AI agents, n8n workflows and independent Next.js projects.",
    images: "/portrait.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="antialiased no-scrollbar">
        <div className="fixed top-0 left-0 right-0 z-40">
          <SideBar />
          <Navbar />
        </div>
        {children}
        <div className="">
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
