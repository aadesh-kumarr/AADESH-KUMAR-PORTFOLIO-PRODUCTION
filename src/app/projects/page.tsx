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
  impact?: string;
  image?: string; // Optional Parameter
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Decoded Person",
    category: "AI Researcher & Writer",
    description:
      "An AI-based researcher and writer for tech news. It ingests 20 RSS sources, triages stories with an LLM, extracts full text, validates facts and deduplicates against PostgreSQL before publishing.",
    tech: ["Next.js 16", "React 19", "Prisma 7", "PostgreSQL", "n8n", "Multi-model LLM", "IndexNow"],
    impact: "Average Google position 8.1 with 522 impressions in its first week live.",
    live: "https://decodedperson.com",
  },
  {
    title: "Japp Tattva",
    category: "AI Product Suggestions & Blog Writing",
    description:
      "A commerce platform with an AI chat assistant that suggests products from the catalogue and an AI blog writer. A 109-node n8n pipeline covers research, writing, audit, SEO and publishing with model fallback.",
    tech: ["Next.js 16", "Prisma 7", "PostgreSQL", "Redis", "NextAuth", "Razorpay", "n8n"],
    impact: "1.83K Web impressions and 17 clicks in 28 days in Search Console.",
    image: "/JappTattva.png",
    live: "https://japptattva.com",
  },
  {
    title: "YouTube Podcasts to Shorts",
    category: "AI Video Automation",
    description:
      "An n8n workflow for turning YouTube podcast content into short-form clips and publishing them.",
    tech: ["n8n", "YouTube", "Video automation", "Publishing"],
    live: "https://www.youtube.com/channel/UCvngM-74fgwuy1B89Yw5FrA",
  },
  {
    title: "Filtered Job Search",
    category: "AI Job Search",
    description:
      "A personal job-search workflow that finds opportunities according to selected filters.",
    tech: ["Job search", "Filtering", "Automation"],
  },
  {
    title: "YouTube Horror Video Generation",
    category: "AI Video Generation",
    description:
      "An n8n workflow for generating horror videos for YouTube.",
    tech: ["n8n", "AI", "Video generation", "YouTube"],
    live: "https://www.youtube.com/channel/UCdkpL-je6skbnp0uX7qOCiQ",
  },
  {
    title: "AI Script-to-Video Engine",
    category: "Independent Local Demo",
    description:
      "A separate, locally demonstrable Next.js script-to-video engine with OpenAI scripting, local Hugging Face image models, still-image video assembly, AI scene direction and sound-effect suggestions.",
    tech: ["Next.js", "OpenAI", "Hugging Face", "Video"],
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
            Personal projects across full-stack development and AI automation.
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
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} className="text-neutral-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`} className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 transition-colors hover:text-amber-400">
                        {project.live.includes("youtube.com") ? "Channel" : "Live site"}
                        <ExternalLink className="h-4 w-4" />
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

                {project.impact && (
                  <div className="pt-6 border-t border-white/5 flex items-center gap-3 mt-auto">
                    <Zap className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                    <span className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider">
                      {project.impact}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
