const groups = [
  { title: "Applications", skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "TanStack Query", "TanStack Table"] },
  { title: "Backend & data", skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Prisma", "Redis"] },
  { title: "AI & automation", skills: ["n8n", "RAG", "OpenAI", "Gemini", "Llama", "Webhooks", "SERP API"] },
  { title: "Testing & delivery", skills: ["Vitest", "Jest", "Supertest", "K6", "Grafana", "GitHub Actions", "Vercel"] },
];

export default function TechStack() {
  return (
    <section id="skills" className="site-container py-20 sm:py-28">
      <div className="mb-12">
        <p className="eyebrow">03 / Toolkit</p>
        <h2 className="section-title mt-3 text-white">The tools behind the work.</h2>
      </div>
      <div className="grid border-t border-[#29333e] md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.title} className="border-b border-[#29333e] py-8 md:pr-10">
            <h3 className="mb-5 text-lg font-semibold tracking-tight text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => <span key={skill} className="chip">{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
