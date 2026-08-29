import type { Metadata } from "next";
import SideBar from "./components/main/sidebar";
import Resume from "./components/main/resume";
import Navbar from "./components/main/navbar";
import Footer from "./components/main/footer";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const SITE_URL = "https://aadeshkumar-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aadesh Kumar — AI Automation Engineer & Full-Stack Developer",
    template: "%s | Aadesh Kumar",
  },
  description:
    "Aadesh Kumar builds AI agent workflows and production web platforms. Sole developer across five SaaS products, and the engineer behind Japp Tattva and Decoded Person — two live, fully automated content and commerce systems.",
  keywords: [
    "Aadesh Kumar",
    "AI automation engineer",
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
    title: "Aadesh Kumar — AI Automation Engineer & Full-Stack Developer",
    description:
      "AI agent workflows, multi-model LLM pipelines and production web platforms. Two live automated products: Japp Tattva and Decoded Person.",
    url: SITE_URL,
    siteName: "Aadesh Kumar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Aadesh Kumar — AI Automation Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadesh Kumar — AI Automation Engineer & Full-Stack Developer",
    description:
      "AI agent workflows, multi-model LLM pipelines and production web platforms.",
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
          <Resume />
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
