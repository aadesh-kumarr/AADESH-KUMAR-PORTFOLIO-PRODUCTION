import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Japp Tattva",
    category: "Chat assistant / blog writing",
    description: "An AI chat assistant suggests products from the catalogue. A 109-node n8n workflow researches topics, writes blogs, audits content, updates SEO metadata and publishes with fallback across GPT, Gemini and Llama.",
    stack: ["n8n", "LLM fallback", "Search Console"],
    href: "https://japptattva.com",
    link: "Visit site",
  },
  {
    title: "Decoded Person",
    category: "Research / writing / distribution",
    description: "An AI researcher and writer that ingests 20 RSS sources, triages stories with an LLM, extracts full text, validates facts and deduplicates against PostgreSQL before publishing.",
    stack: ["RSS", "LLM triage", "PostgreSQL"],
    href: "https://decodedperson.com",
    link: "Visit site",
  },
  {
    title: "YouTube Podcasts to Shorts",
    category: "Video workflow",
    description: "An n8n flow for turning YouTube podcast content into short-form clips and publishing them.",
    stack: ["n8n", "YouTube", "Publishing"],
    href: "https://www.youtube.com/channel/UCvngM-74fgwuy1B89Yw5FrA",
    link: "View channel",
  },
  {
    title: "YouTube Horror Video Generation",
    category: "Video workflow",
    description: "An n8n flow for generating horror videos for YouTube.",
    stack: ["n8n", "AI video", "YouTube"],
    href: "https://www.youtube.com/channel/UCdkpL-je6skbnp0uX7qOCiQ",
    link: "View channel",
  },
  {
    title: "Filtered Job Search",
    category: "Search workflow",
    description: "A personal n8n workflow that finds job opportunities according to selected filters.",
    stack: ["n8n", "Search", "Filtering"],
  },
  {
    title: "AI Script-to-Video Engine",
    category: "Separate local demo",
    description: "A Next.js prototype using OpenAI for scripting, local Hugging Face models for images, still-image video assembly, AI scene direction and sound-effect suggestions.",
    stack: ["Next.js", "OpenAI", "Hugging Face"],
  },
];

export default function AutomationClientPage() {
  return (
    <main className="page-shell">
      <div className="site-container">
        <div className="grid gap-8 border-b border-[#29333e] pb-14 lg:grid-cols-[1fr_.75fr]">
          <div>
            <p className="eyebrow">Personal work / AI automation</p>
            <h1 className="page-title mt-4 max-w-3xl text-white">Systems that turn ideas into output.</h1>
          </div>
          <div className="flex flex-col justify-end">
            <p className="lead">Independent experiments in research, writing, product discovery, video and search. Each one is a project I can discuss publicly.</p>
            <Link href="/projects" className="motion-link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a4dbd6] hover:text-white">
              Browse all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-3">
          {projects.map((project, index) => (
            <article key={project.title} className="motion-row grid gap-6 border-b border-[#29333e] py-9 md:grid-cols-[4rem_minmax(0,1fr)_minmax(260px,.7fr)] md:gap-8">
              <span className="font-mono text-xs text-[#71928f]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="eyebrow">{project.category}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-.04em] text-white sm:text-3xl">{project.title}</h2>
              </div>
              <div>
                <p className="text-sm leading-7 text-[#a8b4bd]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="chip">{item}</span>)}</div>
                {"href" in project && project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a4dbd6] hover:text-white">
                    {project.link} <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
