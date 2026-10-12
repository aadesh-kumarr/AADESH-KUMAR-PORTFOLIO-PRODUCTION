import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/automation", label: "Automation" },
  { href: "/Blogs", label: "Blogs" },
];

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="flex h-20 items-center justify-between gap-3 border-b border-amber-400/20 bg-stone-900/95 px-3 text-stone-100 backdrop-blur sm:px-6">
      <div className="flex min-w-0 items-center gap-3 overflow-x-auto whitespace-nowrap text-xs font-semibold sm:gap-6 sm:text-sm">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="transition-colors hover:text-amber-400">
            {label}
          </Link>
        ))}
      </div>
      <Link href="/resume" className="shrink-0 rounded-full bg-amber-400 px-3 py-2 text-xs font-bold text-black transition-colors hover:bg-amber-300 sm:px-4 sm:text-sm">
        Résumé
      </Link>
    </nav>
  );
}
