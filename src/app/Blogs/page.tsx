"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { Datatype } from "@/type";

export default function Blog() {
  const [category, setCategory] = useState<"personal" | "professional">("personal");
  const [blogs, setBlogs] = useState<Datatype[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    fetch("/api/admin", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load writing");
        return response.json();
      })
      .then((result) => {
        if (!cancelled) {
          setBlogs(Array.isArray(result.blogs) ? result.blogs : []);
          setStatus("ready");
        }
      })
      .catch(() => { if (!cancelled) setStatus("error"); })
      .finally(() => window.clearTimeout(timeout));
    return () => { cancelled = true; controller.abort(); window.clearTimeout(timeout); };
  }, []);

  const filtered = useMemo(
    () => blogs
      .filter((blog) => blog.category === category && blog.title.toLowerCase().includes(searchInput.toLowerCase()))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [blogs, category, searchInput]
  );

  return (
    <main className="page-shell">
      <div className="site-container">
        <div className="page-intro">
          <p className="eyebrow">Notes / Writing</p>
          <h1 className="page-title mt-4 text-white">Ideas in progress.</h1>
          <p className="lead mt-6">Writing about technology, projects and the things I&apos;m learning along the way.</p>
        </div>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#29333e] pb-6">
          <div role="group" aria-label="Writing category" className="flex gap-2">
            {(["personal", "professional"] as const).map((option) => (
              <button key={option} type="button" aria-pressed={category === option} onClick={() => setCategory(option)} className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition-colors ${category === option ? "border-[#9bd7d0] bg-[#1b3030] text-[#bce9e5]" : "border-[#36444e] text-[#a8b4bd] hover:border-[#9bd7d0]"}`}>
                {option}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-full border border-[#36444e] px-4 py-2 text-[#9aa8b2]">
            <Search className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Search articles by title</span>
            <input type="search" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} placeholder="Search titles" className="w-36 bg-transparent text-sm text-white outline-none placeholder:text-[#77858f] sm:w-48" />
          </label>
        </div>
        {status === "loading" && <p className="py-16 text-[#a8b4bd]">Loading writing…</p>}
        {status === "error" && <p className="py-16 text-[#a8b4bd]">Writing is unavailable right now.</p>}
        {status === "ready" && filtered.length === 0 && <p className="py-16 text-[#a8b4bd]">No articles match this selection.</p>}
        {status === "ready" && (
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((blog) => (
              <article key={String(blog._id)} className="panel p-7">
                <p className="eyebrow">{new Date(blog.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">{blog.title}</h2>
                {blog.link?.startsWith("https://") && (
                  <a href={blog.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a4dbd6] hover:text-white">
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
