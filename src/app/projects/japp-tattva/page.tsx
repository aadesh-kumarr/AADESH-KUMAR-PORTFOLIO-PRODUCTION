import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Japp Tattva | My Project Case Study',
  description:
    'A personal project case study for Japp Tattva, highlighting my work on branding, digital presence, storytelling, and SEO-focused web execution.',
  alternates: {
    canonical: 'https://aadeshkumar-portfolio.vercel.app/projects/japp-tattva',
  },
  openGraph: {
    title: 'Japp Tattva | My Project Case Study',
    description:
      'Explore my personal project work on Japp Tattva, including branding, digital presence, and SEO-focused web execution.',
    url: 'https://aadeshkumar-portfolio.vercel.app/projects/japp-tattva',
    type: 'article',
    images: [{ url: '/JappTattva.png', width: 1200, height: 630, alt: 'Japp Tattva project preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japp Tattva | My Project Case Study',
    description:
      'Explore my personal project work on Japp Tattva, including branding, digital presence, and SEO-focused web execution.',
    images: ['/JappTattva.png'],
  },
};

export default function JappTattvaPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Project spotlight
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Japp Tattva — Brand & Platform Project
          </h1>
          <p className="max-w-3xl text-lg text-neutral-300">
            This is one of my personal projects, where I shaped the digital identity of Japp Tattva by building a
            polished brand presence, improving discoverability, and creating a platform experience aligned with the
            brand’s values.
          </p>
        </div>

        <div className="grid gap-6 rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 shadow-2xl md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">What I worked on</h2>
            <ul className="list-disc space-y-2 pl-5 text-neutral-300">
              <li>Built a consistent brand presence for a spiritual and lifestyle-focused platform.</li>
              <li>Structured the web experience around clarity, trust, and content visibility.</li>
              <li>Applied SEO-friendly positioning and a modern user experience for long-term growth.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-6">
            <h3 className="text-lg font-semibold text-amber-300">Project focus</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-200">
              Brand engineering, digital storytelling, web presence, and polished online visibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-200">
                Next.js
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-200">
                SEO
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-200">
                Branding
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Why this project matters</h2>
          <p className="mt-4 max-w-3xl text-neutral-300">
            This personal project reflects a strong blend of strategy, storytelling, and technical execution. The goal
            was to create a digital experience that feels authentic, memorable, and ready to scale.
          </p>
        </div>

        <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8">
          <h2 className="text-2xl font-semibold text-white">Backlink-friendly reference</h2>
          <p className="mt-4 max-w-3xl text-neutral-200">
            If you want to reference this work, you can link to this page as a case study of my personal project for
            Japp Tattva, or use the direct site link below.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://www.japptattva.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-amber-400/40 bg-amber-400 px-5 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              Visit Japp Tattva
            </a>
            <a
              href="https://aadeshkumar-portfolio.vercel.app/projects/japp-tattva"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
            >
              Open this project page
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.japptattva.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300"
          >
            Visit Japp Tattva
          </a>
          <Link
            href="/projects"
            className="rounded-full border border-neutral-700 px-6 py-3 font-semibold text-neutral-200 transition hover:border-amber-400 hover:text-amber-300"
          >
            Back to projects
          </Link>
        </div>
      </div>
    </main>
  );
}
