import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Clapperboard, Newspaper, Scissors, ShoppingBag } from "lucide-react";

const projects = [
  {
    title: "Japp Tattva",
    type: "Live personal project",
    icon: ShoppingBag,
    description:
      "An AI chat assistant suggests products from the catalogue, while a 109-node n8n workflow researches topics, writes blogs, audits content, updates SEO metadata and publishes. The writer falls back across GPT, Gemini and Llama models.",
    stack: ["n8n", "GPT", "Gemini", "Llama", "Google Search Console"],
    href: "https://japptattva.com",
    linkText: "Visit live site",
  },
  {
    title: "Decoded Person",
    type: "Live personal project",
    icon: Newspaper,
    description:
      "An AI researcher and writer that ingests 20 RSS sources, uses an LLM to triage stories, extracts full text, validates facts and deduplicates against PostgreSQL before publishing.",
    stack: ["RSS", "LLM triage", "PostgreSQL", "Publishing APIs"],
    href: "https://decodedperson.com",
    linkText: "Visit live site",
  },
  {
    title: "YouTube Podcasts to Shorts",
    type: "Personal project",
    icon: Scissors,
    description:
      "An n8n workflow for converting YouTube podcast content into short-form clips and publishing them.",
    stack: ["n8n", "YouTube", "Video automation", "Publishing"],
    href: "https://www.youtube.com/channel/UCvngM-74fgwuy1B89Yw5FrA",
    linkText: "View shorts channel",
  },
  {
    title: "Filtered Job Search",
    type: "Personal project",
    icon: BriefcaseBusiness,
    description:
      "An n8n job-search workflow that finds opportunities according to selected filters.",
    stack: ["n8n", "Job search", "Filtering"],
    href: "/projects",
    linkText: "View project summary",
  },
  {
    title: "YouTube Horror Video Generation",
    type: "Personal project",
    icon: Clapperboard,
    description:
      "An n8n workflow for generating horror videos for YouTube.",
    stack: ["n8n", "AI", "Video generation", "YouTube"],
    href: "https://www.youtube.com/channel/UCdkpL-je6skbnp0uX7qOCiQ",
    linkText: "View horror channel",
  },
  {
    title: "AI Script-to-Video Engine",
    type: "Separate local demo",
    icon: Clapperboard,
    description:
      "A Next.js prototype using OpenAI for scripting, local Hugging Face models for images, still-image video assembly, AI scene direction and sound-effect suggestions.",
    stack: ["Next.js", "OpenAI", "Hugging Face", "Video assembly"],
    href: "/projects",
    linkText: "View project summary",
  },
];

export default function AutomationClientPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-5 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Personal projects</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">AI automation in my own projects</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-400">
            I use these independent projects to explore content pipelines, model orchestration and automated publishing. They show the systems I can discuss and demonstrate publicly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-black">
              All personal projects <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/resume" className="rounded-full border border-neutral-700 px-5 py-3 text-sm font-bold text-neutral-200">View résumé</Link>
          </div>
        </div>

        <section className="mt-16 grid gap-5 md:grid-cols-2" aria-label="Personal automation projects">
          {projects.map(({ title, type, icon: Icon, description, stack, href, linkText }) => (
            <article key={title} className="flex flex-col rounded-3xl border border-neutral-800 bg-neutral-900/70 p-7">
              <Icon className="h-7 w-7 text-amber-400" aria-hidden="true" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">{type}</p>
              <h2 className="mt-2 text-2xl font-bold">{title}</h2>
              <p className="mt-4 flex-1 leading-relaxed text-neutral-400">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((skill) => <span key={skill} className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{skill}</span>)}
              </div>
              <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-7 inline-flex items-center gap-1 self-start text-sm font-semibold text-amber-400">
                {linkText} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
