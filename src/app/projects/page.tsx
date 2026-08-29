"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Github, ExternalLink, Zap } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  impact: string;
  image?: string; // Optional Parameter
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Decoded Person",
    category: "Autonomous Content Platform",
    description:
      "An automated tech-news desk. 20 RSS sources feed an LLM triage step, then full-text scraping, a fact-validation agent and a quality gate before anything publishes \u2014 with deduplication against Postgres at every stage. A single workflow then distributes each story to YouTube, Instagram, LinkedIn and Discord, including resumable chunked media uploads.",
    tech: ["Next.js 16", "React 19", "Prisma 7", "PostgreSQL", "n8n", "Multi-model LLM", "IndexNow"],
    impact: "Average Google position 8.1 with 522 impressions in its first week live.",
    live: "https://decodedperson.com",
  },
  {
    title: "Japp Tattva",
    category: "E-Commerce & Content Engine",
    description:
      "A storefront, admin backend and headless blog platform in one monorepo, with Redis caching, scheduled cron jobs and payment integration. Behind it runs a 109-node content pipeline \u2014 research, write, audit, SEO, publish \u2014 that falls back across GPT, Gemini and Llama when a model fails, plus a keyword engine that merges Search Console data with AI candidates and rewrites post metadata automatically.",
    tech: ["Next.js 16", "Prisma 7", "PostgreSQL", "Redis", "NextAuth", "Razorpay", "n8n"],
    impact: "3.58K search impressions over three months, trending up roughly 3\u00d7.",
    image: "/JappTattva.png",
    live: "https://japptattva.com",
  },
  {
    title: "AI Agents & Workflow Automation",
    category: "Automation (CIS IT Solutions)",
    description:
      "Production AI agents across several products \u2014 after-sales support, astrology consultation and CRM automation \u2014 plus an n8n and SERP API pipeline that researches, writes, SEO-optimises and publishes content on its own. I also took over agents that had stalled for around three months and brought them to production quality.",
    tech: ["n8n", "AI Agents", "SERP API", "Node.js", "REST APIs"],
    impact: "Removed the need for a dedicated content and SEO hire.",
  },
  {
    title: "Multi-Tenant SaaS Platform",
    category: "Backend Architecture (CIS IT Solutions)",
    description:
      "Rebuilt the Fesensi backend for multi-tenancy under senior mentorship, removing the architectural limit that blocked onboarding new client organisations. Covered by unit and integration tests, and load-tested with K6 and Grafana so bottlenecks surfaced before release rather than after.",
    tech: ["Next.js", "Node.js", "Redis", "K6", "Grafana", "Vitest", "Metronic"],
    impact: "Performance verified under load before release, not after.",
  },
  {
    title: "Bill & Order Tracker",
    category: "Financial Systems",
    description:
      "A daily transaction logging and order tracking app with secure session management via NextAuth and Google OAuth 2.0, backed by Prisma and PostgreSQL.",
    tech: ["Next.js 14", "NextAuth", "Prisma", "PostgreSQL"],
    impact: "Secure relational data management with OAuth-backed sessions.",
    image: "/billManager.png",
    live: "https://hardwar-market.vercel.app/home",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-neutral-950 py-20 px-6 relative antialiased">
      <BackgroundBeams />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
          >
            Built <span className="text-amber-400">&</span> Deployed
          </motion.h1>
          <p className="text-neutral-500 mt-6 max-w-lg mx-auto text-lg italic">
            A showcase of production-grade systems, automated workflows, and high-performance architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-neutral-900/40 border border-neutral-800 rounded-[2rem] overflow-hidden hover:border-amber-400/30 transition-all duration-500 shadow-2xl flex flex-col"
            >
              {/* Optional Image Container */}
              {project.image ? (
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-6">
                    <span className="px-3 py-1 bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              ) : (
                /* Placeholder for Projects without images */
                <div className="h-24 w-full bg-neutral-800/50 flex items-end px-8 pb-4">
                  <span className="px-3 py-1 bg-neutral-700 text-amber-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-amber-400/20">
                    {project.category}
                  </span>
                </div>
              )}

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" className="text-neutral-500 hover:text-amber-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] font-bold bg-white/5 text-neutral-300 rounded-md border border-white/10 uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center gap-3 mt-auto">
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                  <span className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider">
                    {project.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}