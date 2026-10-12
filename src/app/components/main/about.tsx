import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="border-y border-[#29333e] bg-[#10161c] py-20 sm:py-28">
      <div className="site-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow">02 / About</p>
          <h2 className="section-title mt-4 max-w-md text-white">Engineering with curiosity and ownership.</h2>
          <Link href="/resume" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#a4dbd6] hover:text-white">
            Read my résumé <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-6 text-base leading-8 text-[#a8b4bd] sm:text-lg">
          <p>
            I&apos;m Aadesh Kumar, a full-stack developer and AI automation engineer based in Haridwar, India.
            My professional experience spans interfaces, APIs, integrations, testing and workflow automation.
          </p>
          <p>
            My personal projects are where I make that work visible. <strong className="font-medium text-white">Decoded Person</strong> is an AI researcher and writer. <strong className="font-medium text-white">Japp Tattva</strong> pairs AI product suggestions with automated blog writing.
          </p>
          <p>
            I also build n8n flows for podcast shorts, horror video publishing and filtered job search, alongside a separate local script-to-video demo. I&apos;m seeking full-stack and AI automation engineering roles.
          </p>
        </div>
      </div>
    </section>
  );
}
