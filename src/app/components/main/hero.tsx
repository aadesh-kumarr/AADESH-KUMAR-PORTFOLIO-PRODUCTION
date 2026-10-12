import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";

const stats = [
  { value: "02", label: "Live independent platforms" },
  { value: "20", label: "RSS sources in my news pipeline" },
  { value: "109", label: "Nodes in my content workflow" },
];

export default function Hero() {
  return (
    <section className="hero-glow border-b border-[#29333e]">
      <div className="site-container pb-14 pt-12 sm:pb-20 sm:pt-20">
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-[#29333e] pb-5">
          <span className="eyebrow">Aadesh Kumar / Portfolio</span>
          <span className="hidden text-xs text-[#8d9ba5] sm:block">Haridwar, India · Open to roles</span>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)] lg:gap-16">
          <div className="motion-hero-copy">
            <p className="mb-5 flex items-center gap-2 text-sm font-medium text-[#b4dcd8]">
              <span className="h-2 w-2 rounded-full bg-[#9bd7d0]" /> Full-stack developer &amp; AI automation engineer
            </p>
            <h1 className="display-title max-w-4xl text-white">
              Building useful software<span className="text-[#9bd7d0]">,</span> end to end.
            </h1>
            <p className="lead mt-8 max-w-2xl">
              I work across product engineering and AI automation. My personal projects range from
              live Next.js platforms to n8n workflows for research, writing, video publishing and job search.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="button-primary">Explore projects <ArrowUpRight className="h-4 w-4" /></Link>
              <Link href="/resume" className="button-secondary">View résumé <Download className="h-4 w-4" /></Link>
              <a href="mailto:aadeshk306@gmail.com?subject=Engineering%20Opportunity" className="button-secondary">Get in touch <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="motion-hero-portrait relative mx-auto w-full max-w-[460px]">
            <div className="absolute -left-5 -top-5 hidden h-24 w-24 border-l border-t border-[#5c8585] sm:block" aria-hidden="true" />
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.25rem] border border-[#40545a] bg-[#1b242a]">
              <Image src="/portrait.webp" alt="Portrait of Aadesh Kumar" fill priority sizes="(max-width: 1024px) 80vw, 420px" className="object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081014]/90 to-transparent px-6 pb-5 pt-16">
                <span className="text-xs font-semibold uppercase tracking-[.2em] text-white">Engineer · Builder · Job seeker</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-4 hidden h-24 w-24 border-b border-r border-[#5c8585] sm:block" aria-hidden="true" />
          </div>
        </div>
        <div className="motion-hero-stats mt-20 grid gap-6 border-t border-[#29333e] pt-7 sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="text-3xl font-semibold tracking-[-.06em] text-white">{value}</span>
              <span className="max-w-40 text-xs leading-relaxed text-[#95a2ac]">{label}</span>
            </div>
          ))}
          <a href="#selected-work" className="col-span-full mt-2 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#9bd7d0] hover:text-white">
            Scroll to selected work <ArrowDownRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
