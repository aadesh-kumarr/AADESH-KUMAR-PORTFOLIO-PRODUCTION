import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/main/navbar";
import Footer from "./components/main/footer";
import MotionEffects from "./components/main/motion_effects";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const SITE_URL = "https://aadeshkumar-portfolio.vercel.app";
const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aadesh Kumar — Full-Stack Developer & AI Automation Engineer",
    template: "%s | Aadesh Kumar",
  },
  description:
    "Aadesh Kumar is a full-stack developer and AI automation engineer in Haridwar, India. Explore his personal Next.js platforms, n8n workflows and engineering experience.",
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
      "Explore Aadesh Kumar's personal Next.js platforms, AI automation workflows and engineering experience.",
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
      "Explore Aadesh Kumar's personal Next.js platforms, AI automation workflows and engineering experience.",
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
      </head>

      <body className={`${geist.variable} antialiased`}>
        <MotionEffects />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
