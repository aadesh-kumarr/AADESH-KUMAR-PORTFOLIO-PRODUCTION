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
            AI automation engineer, SEO specialist and full-stack developer with more than two
            years of industry experience. At{" "}
            <span className="font-medium text-amber-400">CIS IT Solutions</span>, I&apos;ve been the
            sole developer on five production products spanning multi-tenant SaaS, e-commerce,
            customer-experience analytics, online consultation and CRM — owning the frontend end
            to end and contributing to backend architecture on each.
          </p>

          <p>
            The work I care most about is <span className="font-medium text-amber-400">AI automation</span>.
            I build <span className="ml-1 font-medium text-amber-400">n8n</span> workflows and agent
            systems that handle real business logic: content research and publishing, after-sales
            support, CRM updates and online consultations. I also own the SEO layer — keyword
            research, technical search health, structured data and automated indexing — that helps
            those systems rank.
          </p>

          <p>
            On the platform side I helped rebuild a client SaaS backend for{" "}
            <span className="font-medium text-amber-400">multi-tenancy</span> under senior
            mentorship. I work with{" "}
            <span className="font-medium text-amber-400">Redis caching</span>,{" "}
            <span className="font-medium text-amber-400">PostgreSQL</span> with Prisma, and{" "}
            <span className="font-medium text-amber-400">OAuth 2.0</span> flows — and I load-test
            with <span className="font-medium text-amber-400">K6 and Grafana</span> rather than
            hoping it holds.
          </p>

          <p>
            I plan before I type. <span className="font-medium text-amber-400">Excalidraw</span>{" "}
            first, then the schema, then the code. It has saved me more rewrites than any framework
            has.
          </p>

          <p className="border-t border-neutral-800 pt-6 text-sm italic text-neutral-400">
            My own platforms are the proof: Japp Tattva at{" "}
            <span className="font-medium text-amber-400">3.58K search impressions</span> over three
            months, and Decoded Person hitting an{" "}
            <span className="font-medium text-amber-400">average Google position of 8.1</span> in its
            first week live.
          </p>
        </div>
      </div>
    </Vortex>
  );
}
