import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const work = [
  {
    number: "01",
    name: "Decoded Person",
    category: "AI research & publishing",
    description: "An AI researcher and writer for tech news. The pipeline ingests 20 RSS sources, triages stories, validates facts and publishes across channels.",
    href: "https://decodedperson.com",
    metric: "20 sources",
    metricLabel: "in the research pipeline",
    tags: ["Next.js", "PostgreSQL", "LLM triage", "n8n"],
  },
  {
    number: "02",
    name: "Japp Tattva",
    category: "Commerce & content automation",
    description: "A storefront with AI product suggestions and a 109-node workflow for blog research, writing, auditing and publishing.",
    href: "https://japptattva.com",
    metric: "109 nodes",
    metricLabel: "in the content workflow",
    tags: ["Next.js", "Prisma", "Redis", "n8n"],
  },
];

export default function FeaturedWork() {
  return (
    <section id="selected-work" className="site-container scroll-mt-28 py-20 sm:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2 className="section-title mt-3 text-white">Built, shipped, running.</h2>
        </div>
        <Link href="/projects" className="motion-link inline-flex items-center gap-2 text-sm font-semibold text-[#a4dbd6] hover:text-white">
          All personal projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {work.map((item) => (
          <article key={item.name} className="panel panel-hover flex min-h-[420px] flex-col p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-[#71818b]">{item.number} / LIVE</span>
              <span className="h-2 w-2 rounded-full bg-[#9bd7d0]" aria-label="Live project" />
            </div>
            <div className="mt-12">
              <p className="eyebrow">{item.category}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-.045em] text-white sm:text-4xl">{item.name}</h3>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#a8b4bd]">{item.description}</p>
            </div>
            <div className="mt-auto pt-10">
              <div className="flex flex-wrap items-end justify-between gap-5 border-t border-[#29333e] pt-6">
                <div>
                  <p className="text-2xl font-semibold tracking-[-.04em] text-[#a4dbd6]">{item.metric}</p>
                  <p className="mt-1 text-xs text-[#8e9da7]">{item.metricLabel}</p>
                </div>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="button-secondary px-4 py-2 text-xs">
                  Visit project <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
