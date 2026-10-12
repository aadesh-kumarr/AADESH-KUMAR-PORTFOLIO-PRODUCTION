import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/automation", label: "AI work" },
  { href: "/#experience", label: "Experience" },
  { href: "/resume", label: "Résumé" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#29333e] bg-[#0c1015]/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="site-container flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-sm font-bold tracking-tight text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#527a7a] bg-[#17282a] text-xs text-[#a9ddd7]">AK</span>
          <span className="hidden sm:block">Aadesh Kumar<span className="text-[#7d8b93]"> / Portfolio</span></span>
        </Link>
        <div className="flex min-w-0 items-center gap-4 overflow-x-auto whitespace-nowrap text-xs font-medium text-[#b4c0c8] sm:gap-7 sm:text-sm">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link py-3 transition-colors hover:text-[#a9ddd7]">{label}</Link>
          ))}
        </div>
        <a href="mailto:aadeshk306@gmail.com?subject=Engineering%20Opportunity" className="hidden shrink-0 items-center gap-1.5 rounded-full border border-[#43505b] px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#9bd7d0] lg:inline-flex">
          Contact <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}
