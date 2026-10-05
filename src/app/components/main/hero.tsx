"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import styles from "./styles.module.css";

const stats = [
  { value: "5", label: "products shipped\nas sole developer" },
  { value: "2", label: "live automated\nplatforms" },
  { value: "2+", label: "years of\nindustry experience" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-8 pb-4">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Open to opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            I build systems that
            <br />
            <Cover>run themselves</Cover>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            I&apos;m <span className="font-semibold text-white">Aadesh Kumar</span> — an
            <span className="font-medium text-amber-400"> AI automation engineer</span>, SEO
            specialist and full-stack developer with more than two years of industry experience.
            I design AI agent workflows and search-driven content systems, and I&apos;ve been the
            sole developer across five production products at CIS IT Solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.03]"
            >
              See the work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-bold text-neutral-200 transition-colors hover:border-amber-400/50 hover:text-amber-400"
            >
              <FileText className="h-4 w-4" />
              Résumé
            </Link>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-neutral-800 pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-amber-400">{s.value}</div>
                <div className="mt-1 whitespace-pre-line text-[11px] uppercase leading-snug tracking-wider text-neutral-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex justify-center lg:justify-end"
        >
          <div className={styles["img_shadow"]}>
            <div className={styles["home_img"]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
