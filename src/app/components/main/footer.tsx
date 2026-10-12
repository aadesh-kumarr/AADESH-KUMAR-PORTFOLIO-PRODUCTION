import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#29333e] bg-[#0a0e12] py-12">
      <div className="site-container">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">Open to opportunities</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-.05em] text-white sm:text-4xl">Hiring for full-stack or AI automation?</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#a8b4bd]">I&apos;m open to engineering roles where I can build useful products and workflows.</p>
            <a href="mailto:aadeshk306@gmail.com?subject=Engineering%20Opportunity" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a4dbd6] hover:underline">
              aadeshk306@gmail.com <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 self-start text-sm text-[#a8b4bd]">
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <Link href="/automation" className="hover:text-white">AI work</Link>
            <Link href="/#experience" className="hover:text-white">Experience</Link>
            <Link href="/resume" className="hover:text-white">Résumé</Link>
            <Link href="/education" className="hover:text-white">Education</Link>
            <Link href="/Blogs" className="hover:text-white">Writing</Link>
            <a href="https://github.com/aadesh-kumarr" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/aadesh-kumar/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-[#29333e] pt-6 text-xs text-[#73818b]">
          <span>© {new Date().getFullYear()} Aadesh Kumar</span>
          <span>Full-stack development · AI automation</span>
        </div>
      </div>
    </footer>
  );
}
