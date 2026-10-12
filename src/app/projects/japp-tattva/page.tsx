import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Japp Tattva | Full-Stack & Automation Case Study",
  description:
    "How Aadesh Kumar built Japp Tattva's Next.js commerce platform and 109-node n8n content pipeline, with Search Console results.",
  alternates: { canonical: "/projects/japp-tattva" },
  openGraph: {
    title: "Japp Tattva | Full-Stack & Automation Case Study",
    description: "A Next.js storefront, admin backend, headless blog and automated content pipeline.",
    url: "https://aadeshkumar-portfolio.vercel.app/projects/japp-tattva",
    type: "article",
    images: [{ url: "/JappTattva.png", width: 1200, height: 630, alt: "Japp Tattva project preview" }],
  },
};

const details = [
  {
    title: "Full-stack platform",
    copy: "Built a Next.js storefront, admin backend and headless blog in one monorepo using PostgreSQL, Prisma, Redis, NextAuth and Razorpay. Added scheduled jobs and an AI chat assistant that suggests products from the catalogue.",
  },
  {
    title: "Content automation",
    copy: "Built a 109-node n8n workflow for research, writing, audit, SEO and publishing. Model fallback across GPT, Gemini and Llama keeps the pipeline moving when one provider fails.",
  },
  {
    title: "Search workflow",
    copy: "Combined Search Console data with AI topic suggestions. The keyword engine scores relevance, intent and competition before updating content metadata.",
  },
];

export default function JappTattvaPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-5 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Independent project · live</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Japp Tattva</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-400">
          An independent commerce and publishing platform where I built the application, the content automation and the search feedback loop.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://japptattva.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-black">
            Visit live site <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link href="/projects" className="rounded-full border border-neutral-700 px-5 py-3 text-sm font-bold text-neutral-200">All projects</Link>
        </div>

        <section className="mt-16 grid gap-5 md:grid-cols-3" aria-label="Project details">
          {details.map(({ title, copy }) => (
            <article key={title} className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6">
              <h2 className="text-xl font-bold text-amber-400">{title}</h2>
              <p className="mt-4 leading-relaxed text-neutral-300">{copy}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8">
          <h2 className="text-2xl font-bold">Measured search results</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-neutral-300">
            In a 28-day Search Console window, the site recorded 1.83K Web search impressions and 17 clicks, with 0.9% CTR and average position 10.5. A separate Generative AI features report recorded 201 impressions. These figures describe that reporting window, not current traffic.
          </p>
        </section>
      </div>
    </main>
  );
}
