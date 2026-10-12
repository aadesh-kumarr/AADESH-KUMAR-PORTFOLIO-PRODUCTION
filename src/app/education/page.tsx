import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const education = [
  { level: "B.Tech · Computer Science Engineering", school: "Doon Institute of Engineering and Technology, Rishikesh", years: "2021 — 2025", detail: "Full-stack development, algorithms and software engineering foundations." },
  { level: "Class XII · Science", school: "Bombay Public School, Dehradun", years: "2021" },
  { level: "Class X", school: "DAV Centenary Public School, Haridwar", years: "2019" },
];

const certificates = [
  { title: "Chatbot / Smart Assistant Development", issuer: "Cisco thingQbator", image: "/online_certificates/thinqbator_chatbot.png" },
  { title: "Web Development Workshop", issuer: "Microsoft Learn Student Ambassador-hosted", image: "/online_certificates/webdevworkshop.jpg" },
];

export default function EducationPage() {
  return (
    <main className="page-shell">
      <div className="site-container">
        <div className="page-intro">
          <p className="eyebrow">Background / Education</p>
          <h1 className="page-title mt-4 text-white">Where it started.</h1>
          <p className="lead mt-6">My formal computer science background and selected training.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
          <div className="border-t border-[#29333e]">
            {education.map((item, index) => (
              <article key={item.level} className="grid gap-4 border-b border-[#29333e] py-8 sm:grid-cols-[3rem_1fr]">
                <span className="font-mono text-xs text-[#71928f]">0{index + 1}</span>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h2 className="text-xl font-semibold tracking-tight text-white">{item.level}</h2>
                    <span className="text-xs text-[#8d9ba5]">{item.years}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#a4dbd6]">{item.school}</p>
                  {item.detail && <p className="mt-4 text-sm leading-7 text-[#a8b4bd]">{item.detail}</p>}
                </div>
              </article>
            ))}
          </div>
          <div className="relative min-h-[340px] overflow-hidden rounded-[1.25rem] border border-[#29333e] bg-[#172129]">
            <Image src="/education/dgi.jpg" alt="Doon Institute of Engineering and Technology" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
        </div>
        <section className="mt-20">
          <p className="eyebrow">Selected training</p>
          <h2 className="section-title mt-3 text-white">Certificates.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {certificates.map((item) => (
              <article key={item.title} className="panel flex items-center gap-5 p-5">
                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg bg-[#1b252d]">
                  <Image src={item.image} alt={item.title} fill sizes="112px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#a8b4bd]">{item.issuer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Link href="/projects" className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-[#a4dbd6] hover:text-white">See what I built <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </main>
  );
}
