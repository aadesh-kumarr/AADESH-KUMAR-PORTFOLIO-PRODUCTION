"use client";
import Image from "next/image";
import { RefObject } from "react";
import Link from "next/link";
import { Vortex } from "@/components/ui/vortex";

interface AboutProps {
  internshipRef: RefObject<HTMLDivElement>;
}

export default function About({ internshipRef }: AboutProps) {
  const handleScrollToInternship = () => {
    if (internshipRef.current) {
      internshipRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Vortex backgroundColor="" rangeY={800} particleCount={500} baseHue={120} className=" ">
      <div className="mb-60 mt-32 overflow-hidden rounded-[2rem] border border-amber-400/20 bg-neutral-900/60 text-zinc-200 shadow-2xl backdrop-blur-xl sm:mb-80 lg:mt-80">
        <div className="border-b border-amber-400/10 bg-amber-400/10 py-6">
          <h2 className="text-center font-serif text-3xl uppercase tracking-widest text-amber-400">
            About Me
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-6 bg-neutral-800/20 p-8 md:grid-cols-4">
          <Link href={"/education"} className="group flex flex-col items-center transition-all">
            <div className="rounded-2xl border border-neutral-700 bg-neutral-900/80 p-4 transition-all duration-300 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              <Image src="/svgs/education.svg" alt="Education" width={48} height={48} className="h-12 w-12" />
            </div>
            <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-amber-400">
              B.Tech CSE
            </span>
          </Link>

          <Link href={"/automation"} className="group flex flex-col items-center transition-all">
            <div className="rounded-2xl border border-neutral-700 bg-neutral-900/80 p-4 transition-all duration-300 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              <Image src="/svgs/confident.svg" alt="AI Automation" width={48} height={48} className="h-12 w-12" />
            </div>
            <span className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-amber-400">
              AI Automation
            </span>
          </Link>

          <Link href={"/projects"} className="group flex flex-col items-center transition-all">
            <div className="rounded-2xl border border-neutral-700 bg-neutral-900/80 p-4 transition-all duration-300 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              <Image src="/svgs/techie.svg" alt="Architecture" width={48} height={48} className="h-12 w-12" />
            </div>
            <span className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-amber-400">
              Multi-tenant SaaS
            </span>
          </Link>

          <div
            onClick={handleScrollToInternship}
            className="group flex cursor-pointer flex-col items-center transition-all"
          >
            <div className="rounded-2xl border border-neutral-700 bg-neutral-900/80 p-4 transition-all duration-300 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              <Image src="/svgs/internships.svg" alt="Professional" width={48} height={48} className="h-12 w-12" />
            </div>
            <span className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-amber-400">
              Working Pro
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl space-y-6 p-10 text-base leading-relaxed text-neutral-300">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-5xl first-letter:text-amber-400">
            Hi, I&apos;m <span className="text-lg font-semibold text-white">Aadesh Kumar</span>, an
            full-stack developer and AI &amp; automation engineer. At{" "}
            <span className="font-medium text-amber-400">CIS IT Solutions</span>, I&apos;ve been the
            built frontends for Fesensi, Artisan and Nakshatra and contributed backend services
            and API integrations. I also built CXScore360 across its frontend and backend.
          </p>

          <p>
            My AI work includes a ticketing agent with RAG and document retrieval, Nakshatra&apos;s
            chat and reporting agents, and an Artisan sales agent connected to product and order APIs.
            I also build <span className="font-medium text-amber-400">n8n</span> content workflows
            and monitor technical search health with Google Search Console and Bing Webmaster Tools.
          </p>

          <p>
            On the platform side I rebuilt the Fesensi backend for{" "}
            <span className="font-medium text-amber-400">multi-tenancy</span> under senior
            mentorship. I work with{" "}
            <span className="font-medium text-amber-400">Redis caching</span>,{" "}
            <span className="font-medium text-amber-400">PostgreSQL</span> with Prisma, and{" "}
            <span className="font-medium text-amber-400">OAuth 2.0</span> flows — and I load-test
            with <span className="font-medium text-amber-400">K6 and Grafana</span> rather than
            hoping it holds.
          </p>

          <p>
            Earlier, at Perky Solutions, I built dashboards and tables for more than 10,000 rows.
            At Lostronaunt, I translated market research into a Next.js analytics dashboard.
          </p>

          <p className="border-t border-neutral-800 pt-6 text-sm italic text-neutral-400">
            I&apos;m open to full-stack and AI automation engineering opportunities. You can review
            the projects here and choose the résumé that fits your role.
          </p>
        </div>
      </div>
    </Vortex>
  );
}
