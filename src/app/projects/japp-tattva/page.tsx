import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Japp Tattva | Full-Stack & Automation Case Study",
  description: "Aadesh Kumar's personal Next.js commerce platform and 109-node n8n content workflow.",
  alternates: { canonical: "/projects/japp-tattva" },
};

const details = [
  { title: "Platform", copy: "A Next.js storefront, admin backend and headless blog in one monorepo, using PostgreSQL, Prisma, Redis, NextAuth and Razorpay." },
  { title: "AI assistant", copy: "A session-aware chat assistant suggests products from the catalogue." },
  { title: "Publishing", copy: "A 109-node n8n workflow handles research, writing, audit, SEO and publishing with fallback across GPT, Gemini and Llama models." },
  { title: "Search feedback", copy: "A keyword engine combines Search Console data and AI suggestions to score relevance, intent and competition before updating metadata." },
];

export default function JappTattvaPage() {
  return (
    <main className="page-shell">
      <div className="site-container">
        <div className="page-intro">
          <p className="eyebrow">Case study / Personal project</p>
          <h1 className="page-title mt-4 text-white">Japp Tattva.</h1>
          <p className="lead mt-6">A commerce and publishing platform where I built the application, AI product suggestions and an automated content workflow.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://japptattva.com" target="_blank" rel="noopener noreferrer" className="button-primary">Visit live site <ArrowUpRight className="h-4 w-4" /></a>
            <Link href="/projects" className="button-secondary">All projects</Link>
          </div>
        </div>
        <div className="grid gap-5 border-t border-[#29333e] pt-10 md:grid-cols-2">
          {details.map((item, index) => (
            <article key={item.title} className="panel p-7">
              <span className="font-mono text-xs text-[#71928f]">0{index + 1}</span>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#a8b4bd]">{item.copy}</p>
            </article>
          ))}
        </div>
        <section className="mt-14 grid gap-5 border-t border-[#29333e] pt-10 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Results</p>
            <h2 className="section-title mt-3 text-white">Measured search visibility.</h2>
          </div>
          <p className="text-base leading-8 text-[#a8b4bd]">
            In a 28-day Search Console window, the site recorded 1.83K Web search impressions and 17 clicks, with 0.9% CTR and average position 10.5. A separate Generative AI features report recorded 201 impressions. These figures describe that reporting window, not current traffic.
          </p>
        </section>
      </div>
    </main>
  );
}
