import Image from "next/image";

type TechItem = {
  label: string;
  logoPath: string;
};

type TechCategory = {
  title: string;
  blurb: string;
  items: TechItem[];
};

const categories: TechCategory[] = [
  {
    title: "AI & Automation",
    blurb: "Agent workflows, model orchestration and pipelines that run unattended.",
    items: [
      { label: "n8n", logoPath: "/svgs/tech_stack/N8n-logo-new.svg.png" },
      { label: "Next.js", logoPath: "/svgs/tech_stack/nextjs.svg" },
      { label: "Node.js", logoPath: "/svgs/tech_stack/Node.js_logo.svg.webp" },
      { label: "GitHub Actions", logoPath: "/svgs/tech_stack/github-actions.svg" },
    ],
  },
  {
    title: "Application Layer",
    blurb: "Type-safe interfaces and APIs, built to be maintained by someone else later.",
    items: [
      { label: "React.js", logoPath: "/svgs/tech_stack/reactjs.svg" },
      { label: "TypeScript", logoPath: "/svgs/tech_stack/typescript.png" },
      { label: "Tailwind CSS", logoPath: "/svgs/tech_stack/Tailwind_CSS_Logo.svg.png" },
      { label: "Auth.js", logoPath: "/svgs/tech_stack/auth.png" },
    ],
  },
  {
    title: "Data & Infrastructure",
    blurb: "Multi-tenant schemas, caching and the load testing that keeps them honest.",
    items: [
      { label: "PostgreSQL", logoPath: "/svgs/tech_stack/postgress.png" },
      { label: "MongoDB", logoPath: "/svgs/tech_stack/mongodb.svg" },
      { label: "Prisma", logoPath: "/svgs/tech_stack/prisma.svg" },
      { label: "Redis", logoPath: "/svgs/tech_stack/redis.png" },
    ],
  },
];

const alsoUsing = [
  "Express",
  "REST APIs",
  "Socket.io",
  "OAuth 2.0",
  "JWT",
  "Mongoose",
  "Vitest",
  "Jest",
  "Supertest",
  "K6",
  "Grafana",
  "Razorpay",
  "Vercel",
  "Cloudflare",
  "Google Search Console",
  "IndexNow",
  "SERP API",
  "LangChain",
  "OpenAI",
  "Gemini",
  "Llama",
  "Instagram Graph API",
  "YouTube Data API",
  "LinkedIn UGC API",
];

export default function Tech_Stack() {
  return (
    <section className="mx-auto mt-8 max-w-6xl rounded-2xl border border-neutral-800 bg-neutral-900 px-5 py-12 shadow-2xl">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold text-white">Technical Ecosystem</h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-amber-400"></div>
        <p className="mx-auto mt-4 max-w-lg text-neutral-400">
          Automation first, then the application and data layers that make it
          worth automating.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="rounded-xl border border-neutral-700 bg-neutral-800/50 p-6 transition-colors duration-300 hover:border-amber-400/50"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              {category.title}
            </h3>
            <p className="mb-6 mt-2 text-xs leading-relaxed text-neutral-500">
              {category.blurb}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="flex cursor-default flex-col items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-3 transition-transform hover:scale-105"
                >
                  <Image
                    src={item.logoPath}
                    alt={`${item.label} logo`}
                    width={32}
                    height={32}
                    className="mb-2 transition-all duration-300"
                  />
                  <span className="text-xs font-medium text-neutral-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-neutral-800 pt-8">
        <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
          Also working with
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {alsoUsing.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
