"use client";
import Image from 'next/image';
import { RefObject } from 'react';
import Link from 'next/link';
import { Vortex } from '@/components/ui/vortex';

interface AboutProps {
  internshipRef: RefObject<HTMLDivElement>;
}

export default function About({ internshipRef }: AboutProps) {
  const handleScrollToInternship = () => {
    if (internshipRef.current) {
      internshipRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Vortex
      backgroundColor=''
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className=" "
    >
      <div className="border border-amber-400/20 bg-neutral-900/60 backdrop-blur-xl text-zinc-200 sm:mb-80 mb-60 mt-32 lg:mt-80 rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="bg-amber-400/10 py-6 border-b border-amber-400/10">
           <h2 className="text-center font-serif text-3xl tracking-widest text-amber-400 uppercase">
             About Me
           </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-neutral-800/20">
          {/* Education */}
          <Link href={'/education'} className="flex flex-col items-center group transition-all">
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-700 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300">
              <Image src="/svgs/education.svg" alt="Education" width={48} height={48} className="w-12 h-12" />
            </div>
            <span className="mt-3 text-[10px] font-bold text-neutral-500 group-hover:text-amber-400 uppercase tracking-[0.2em]">B.Tech CSE</span>
          </Link>

          {/* Architecture */}
          <Link href={'/projects'} className="flex flex-col items-center group transition-all">
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-700 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300">
              <Image src="/svgs/techie.svg" alt="Architecture" width={48} height={48} className="w-12 h-12" />
            </div>
            <span className="mt-3 text-[10px] font-bold text-neutral-500 group-hover:text-amber-400 uppercase tracking-[0.2em] text-center">Distributed Systems</span>
          </Link>

          {/* AI Automation */}
          <div className="flex flex-col items-center group transition-all">
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-700 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300">
              <Image src="/svgs/confident.svg" alt="AI Automation" width={48} height={48} className="w-12 h-12" />
            </div>
            <span className="mt-3 text-[10px] font-bold text-neutral-500 group-hover:text-amber-400 uppercase tracking-[0.2em]">AI Automation</span>
          </div>

          {/* Experience */}
          <div onClick={handleScrollToInternship} className="flex flex-col items-center group transition-all cursor-pointer">
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-700 group-hover:border-amber-400/60 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300">
              <Image src="/svgs/internships.svg" alt="Professional" width={48} height={48} className="w-12 h-12" />
            </div>
            <span className="mt-3 text-[10px] font-bold text-neutral-500 group-hover:text-amber-400 uppercase tracking-[0.2em] text-center">Working Pro</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10 text-base leading-relaxed text-neutral-300 space-y-6 max-w-4xl mx-auto">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left">
            Hi, I’m <span className="text-white font-semibold text-lg">Aadesh Kumar</span>, a 
            <span className="text-amber-400 font-medium ml-1">Full-Stack Developer</span> currently working at 
            <span className="text-amber-400 font-medium ml-1">CIS IT Solutions</span>. I specialize in engineering high-performance web applications using 
            <span className="text-amber-400 font-medium ml-1">Next.js</span>, 
            <span className="text-amber-400 font-medium ml-1">TypeScript</span>, and distributed backend architectures.
          </p>

          <p>
            My core expertise lies in architecting <span className="text-amber-400 font-medium">distributed service systems</span> and 
            <span className="text-amber-400 font-medium"> multi-tenant SaaS</span> platforms. By leveraging 
            <span className="text-amber-400 font-medium ml-1">Redis caching</span>, secure 
            <span className="text-amber-400 font-medium ml-1">OAuth 2.0</span> flows, and 
            <span className="text-amber-400 font-medium ml-1">PostgreSQL</span> management with Prisma, I build systems designed for scalability and maintainability.
          </p>

          <p>
            I am particularly focused on <span className="text-amber-400 font-medium">AI Automation</span>, deploying 
            <span className="text-amber-400 font-medium ml-1">n8n workflows</span> to handle complex business logic, from ticket triage to automated communication agents.
          </p>

          <p>
            I follow a <span className="text-amber-400 font-medium">planning-first philosophy</span>, using 
            <span className="text-amber-400 font-medium ml-1">Excalidraw</span> to design system flows and modular architectures before writing code. This ensures clarity and speed in delivery.
          </p>

          <p className="border-t border-neutral-800 pt-6 text-neutral-400 italic text-sm">
            Proven track record of driving <span className="text-amber-400 font-medium">1,000+ organic impressions</span> through strategic SEO and building real-world products that balance user experience with solid engineering principles.
          </p>
        </div>
      </div>
    </Vortex>
  );
}