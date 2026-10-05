"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Workflow, ShoppingBag } from "lucide-react";

type Metric = { value: string; label: string };

type Product = {
  name: string;
  url: string;
  href: string;
  tagline: string;
  icon: React.ReactNode;
  stack: string[];
  metrics: Metric[];
  points: string[];
};

const products: Product[] = [
  {
    name: "Decoded Person",
    url: "decodedperson.com",
    href: "https://decodedperson.com",
    tagline: "An autonomous tech-news desk that researches, verifies and publishes without me.",
    icon: <Workflow className="h-5 w-5" />,
    stack: ["Next.js 16", "React 19", "Prisma 7", "PostgreSQL", "n8n", "Multi-model LLM"],
    metrics: [
      { value: "20", label: "RSS sources" },
      { value: "8.1", label: "avg. Google position" },
      { value: "4", label: "publish targets" },
    ],
    points: [
      "20 sources feed an LLM triage step, then full-text scraping, a fact-validation agent and a quality gate before anything publishes.",
      "Every story is deduplicated against Postgres at each stage, so the same news never ships twice.",
      "One workflow distributes to YouTube, Instagram, Facebook, LinkedIn and Discord, including resumable chunked media uploads.",
    ],
  },
  {
    name: "Japp Tattva",
    url: "japptattva.com",
    href: "https://japptattva.com",
    tagline: "A full commerce platform with a content engine that writes and optimises itself.",
    icon: <ShoppingBag className="h-5 w-5" />,
    stack: ["Next.js 16", "Prisma 7", "PostgreSQL", "Redis", "NextAuth", "Razorpay", "n8n"],
    metrics: [
      { value: "109", label: "node pipeline" },
      { value: "3.58K", label: "impressions / 3 mo" },
      { value: "4", label: "apps in monorepo" },
    ],
    points: [
      "Storefront, admin backend and a headless blog platform in one monorepo, with Redis caching, cron jobs and payments.",
      "A 109-node content pipeline runs research → write → audit → SEO → publish, falling back across GPT, Gemini and Llama when a model fails.",
      "A keyword engine merges Search Console data with AI candidates, scores each 0–100, and rewrites post metadata automatically.",
      "A HARO outreach agent filters irrelevant journalist queries, while an AI concierge routes intent and looks up the live product catalogue.",
    ],
  },
];

export default function FeaturedWork() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
          Shipped &amp; Live
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Two products running in production
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Both are mine end to end — schema, API, interface, automation and deployment.
          They run on their own; I mostly watch the dashboards.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {products.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group flex flex-col rounded-3xl border border-neutral-800 bg-neutral-900/50 p-7 transition-colors duration-300 hover:border-amber-400/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded-xl border border-amber-400/25 bg-amber-400/10 p-2.5 text-amber-400">
                  {p.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-amber-400"
                  >
                    {p.url}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
              <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            </div>

            <p className="mt-5 text-[15px] italic leading-relaxed text-neutral-300">
              {p.tagline}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4">
              {p.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-xl font-bold text-amber-400">{m.value}</div>
                  <div className="mt-0.5 text-[10px] uppercase leading-tight tracking-wider text-neutral-500">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-6 flex-grow space-y-3">
              {p.points.map((point, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-neutral-400">
                  <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-amber-400/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-white/5 pt-5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
