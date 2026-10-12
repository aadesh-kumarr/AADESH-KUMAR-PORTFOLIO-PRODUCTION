const experience = [
  {
    role: "Full-Stack Engineer · AI & Automations Engineer",
    company: "CIS IT Solutions",
    period: "Apr 2025 — Present",
    summary: "Frontend and backend engineering, API integrations, testing and AI workflow automation.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Perky Solutions",
    period: "Dec 2024 — Mar 2025",
    summary: "Responsive frontend development, reusable components and data-heavy interfaces.",
  },
  {
    role: "Market Analysis & Next.js Development Intern",
    company: "Lostronaunt",
    period: "Aug 2024 — Oct 2024",
    summary: "Market research, requirements gathering and Next.js development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-[#29333e] bg-[#10161c] py-20 sm:py-28">
      <div className="site-container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">04 / Experience</p>
            <h2 className="section-title mt-3 text-white">Where I&apos;ve worked.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#95a2ac]">Professional roles and responsibilities. The work showcased on this site is from personal projects.</p>
        </div>
        <div className="border-t border-[#29333e]">
          {experience.map((item, index) => (
            <article key={item.company} className="grid gap-3 border-b border-[#29333e] py-7 md:grid-cols-[4rem_1fr_auto] md:gap-8">
              <span className="font-mono text-xs text-[#71928f]">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-.025em] text-white">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-[#a4dbd6]">{item.company}</p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#a8b4bd]">{item.summary}</p>
              </div>
              <span className="text-xs font-medium text-[#8d9ba5] md:text-right">{item.period}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
