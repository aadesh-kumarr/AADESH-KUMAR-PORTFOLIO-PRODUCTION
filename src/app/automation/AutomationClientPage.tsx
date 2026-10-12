import Link from "next/link";
import { ArrowUpRight, Bot, Newspaper, ShoppingBag, Ticket } from "lucide-react";

const work = [
  {
    title: "Fesensi ticketing agent",
    context: "CIS IT Solutions · ticketing SaaS",
    icon: Ticket,
    description: "Extended an inherited RAG and vector database chat agent so users can create tickets, retrieve document files and draft emails from a conversation.",
    skills: ["RAG", "Vector database", "API actions", "Ticketing"],
  },
  {
    title: "Nakshatra chat and reports",
    context: "CIS IT Solutions · astrology app in production",
    icon: Bot,
    description: "Built a chat agent using external panchang, muhurat and kundli APIs, plus a separate reporting agent combining rules, RAG, templates and user data.",
    skills: ["RAG", "External APIs", "Rules", "Report generation"],
  },
  {
    title: "Artisan sales agent",
    context: "CIS IT Solutions · art marketplace",
    icon: ShoppingBag,
    description: "Built a customer-facing agent for product and order lookup, cart and wishlist actions, similar products and support tickets using APIs and chat context.",
    skills: ["Commerce APIs", "Chat context", "Customer support"],
  },
  {
    title: "Research to publishing workflows",
    context: "CIS IT Solutions · n8n and SERP API",
    icon: Newspaper,
    description: "Created n8n blog agents for search-oriented content and developed a SERP API research-to-publishing pipeline. Managed workflows and a Vercel test branch.",
    skills: ["n8n", "SERP API", "SEO", "Publishing"],
  },
];

export default function AutomationClientPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-5 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Selected engineering work</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">AI agents and automation</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-400">
            I build agents that retrieve information and take useful actions inside products. My work at CIS IT Solutions spans ticketing, astrology, commerce and content workflows. My independent projects explore multi-model publishing pipelines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/resume" className="rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-black">View résumé</Link>
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-3 text-sm font-bold text-neutral-200">All projects <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <section className="mt-16 grid gap-5 md:grid-cols-2" aria-label="Professional automation projects">
          {work.map(({ title, context, icon: Icon, description, skills }) => (
            <article key={title} className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-7">
              <Icon className="h-7 w-7 text-amber-400" aria-hidden="true" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">{context}</p>
              <h2 className="mt-2 text-2xl font-bold">{title}</h2>
              <p className="mt-4 leading-relaxed text-neutral-400">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => <span key={skill} className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{skill}</span>)}
              </div>
            </article>
          ))}
        </section>
        <section className="mt-20 border-t border-neutral-800 pt-12">
          <h2 className="text-3xl font-bold">Independent systems</h2>
          <p className="mt-3 max-w-2xl text-neutral-400">I use my own products to test the full path from ingestion and model output to publishing and search visibility.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-xl font-bold">Japp Tattva</h3>
              <p className="mt-3 text-neutral-400">A 109-node n8n pipeline handles research, writing, audit, SEO and publishing with fallback across GPT, Gemini and Llama models. A Search Console and AI keyword engine scores topics and updates metadata.</p>
              <a href="https://japptattva.com" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-amber-400">Visit project <ArrowUpRight className="h-4 w-4" /></a>
            </article>
            <article className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-xl font-bold">Decoded Person</h3>
              <p className="mt-3 text-neutral-400">A news pipeline ingests 20 RSS sources, triages stories with an LLM, extracts full text, validates facts and deduplicates against PostgreSQL before publishing across channels.</p>
              <a href="https://decodedperson.com" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-amber-400">Visit project <ArrowUpRight className="h-4 w-4" /></a>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
