import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  metric?: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: "Decoded Person",
    category: "AI researcher & writer",
    description: "An AI-based researcher and writer for tech news. It ingests 20 RSS sources, triages stories with an LLM, extracts full text, validates facts and deduplicates against PostgreSQL before publishing.",
    tags: ["Next.js", "PostgreSQL", "n8n", "LLMs"],
    href: "https://decodedperson.com",
    linkLabel: "Visit live site",
    metric: "20",
    note: "RSS sources",
  },
  {
    title: "Japp Tattva",
    category: "AI product suggestions & blog writing",
    description: "A commerce platform with an AI chat assistant that suggests products from the catalogue. A 109-node n8n workflow handles blog research, writing, audit, SEO and publishing with model fallback.",
    tags: ["Next.js", "Prisma", "Redis", "n8n"],
    href: "https://japptattva.com",
    linkLabel: "Visit live site",
    metric: "109",
    note: "workflow nodes",
  },
  {
    title: "YouTube Podcasts to Shorts",
    category: "n8n video workflow",
    description: "An n8n workflow for turning YouTube podcast content into short-form clips and publishing them.",
    tags: ["n8n", "YouTube", "Publishing"],
    href: "https://www.youtube.com/channel/UCvngM-74fgwuy1B89Yw5FrA",
    linkLabel: "View shorts channel",
  },
  {
    title: "YouTube Horror Video Generation",
    category: "n8n video workflow",
    description: "An n8n workflow for generating horror videos for YouTube.",
    tags: ["n8n", "Video generation", "YouTube"],
    href: "https://www.youtube.com/channel/UCdkpL-je6skbnp0uX7qOCiQ",
    linkLabel: "View horror channel",
  },
  {
    title: "Filtered Job Search",
    category: "n8n search workflow",
    description: "A personal n8n workflow that finds job opportunities according to selected filters.",
    tags: ["n8n", "Search", "Filtering"],
  },
  {
    title: "AI Script-to-Video Engine",
    category: "Separate local demo",
    description: "A locally demonstrable Next.js script-to-video engine using OpenAI for scripting, local Hugging Face image models, still-image video assembly, AI scene direction and sound-effect suggestions.",
    tags: ["Next.js", "OpenAI", "Hugging Face", "Video"],
  },
];

export default function Projects() {
  return (
    <main className="page-shell">
      <div className="site-container">
        <div className="page-intro">
          <p className="eyebrow">Personal work / 01—06</p>
          <h1 className="page-title mt-4 text-white">Projects built from curiosity.</h1>
          <p className="lead mt-6">Applications and automations I built independently. The first two are live platforms; the others show how I explore video, search and AI workflows.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="panel panel-hover flex min-h-[370px] flex-col p-7 sm:p-9">
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-xs text-[#788893]">{String(index + 1).padStart(2, "0")} / PROJECT</span>
                {project.metric && <span className="text-right text-xs text-[#93a1aa]"><strong className="block text-2xl font-semibold tracking-tight text-[#a4dbd6]">{project.metric}</strong>{project.note}</span>}
              </div>
              <div className="mt-10">
                <p className="eyebrow">{project.category}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-.04em] text-white sm:text-3xl">{project.title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#a8b4bd]">{project.description}</p>
              </div>
              <div className="mt-auto pt-9">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                </div>
                <div className="mt-6 border-t border-[#29333e] pt-5">
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a4dbd6] hover:text-white">
                      {project.linkLabel} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-xs font-medium uppercase tracking-[.15em] text-[#84939d]">Personal project</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-[#29333e] pt-8">
          <p className="text-sm text-[#a8b4bd]">More detail on the AI workflows and publishing systems.</p>
          <Link href="/automation" className="button-secondary">Explore AI work <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </main>
  );
}
