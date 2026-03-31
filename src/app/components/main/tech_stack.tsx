import Image from 'next/image';

type TechItem = {
  label: string;
  logoPath: string;
};

type TechCategory = {
  title: string;
  items: TechItem[];
};

const categories: TechCategory[] = [
  {
    title: "Frontend & Core",
    items: [
      { label: "Next.js", logoPath: "/svgs/tech_stack/nextjs.svg" },
      { label: "React.js", logoPath: "/svgs/tech_stack/reactjs.svg" },
      { label: "TypeScript", logoPath: "/svgs/tech_stack/typescript.png" },
      { label: "Tailwind CSS", logoPath: "/svgs/tech_stack/Tailwind_CSS_Logo.svg.png" },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { label: "Node.js", logoPath: "/svgs/tech_stack/Node.js_logo.svg.webp" },
      { label: "PostgreSQL", logoPath: "/svgs/tech_stack/postgress.png" },
      { label: "MongoDB", logoPath: "/svgs/tech_stack/mongodb.svg" },
      { label: "Prisma", logoPath: "/svgs/tech_stack/prisma.svg" },
    ],
  },
  {
    title: "Automation & Infrastructure",
    items: [
      { label: "n8n (AI)", logoPath: "/svgs/tech_stack/N8n-logo-new.svg.png" },
      { label: "Redis", logoPath: "/svgs/tech_stack/redis.png" },
      { label: "Auth.js", logoPath: "/svgs/tech_stack/auth.png" },
      { label: "GitHub Actions", logoPath: "/svgs/tech_stack/github-actions.svg" },
    ],
  },
];

export default function Tech_Stack() {
  return (
    <section className="mt-12 mx-auto max-w-6xl px-5 py-10 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Ecosystem</h2>
        <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full"></div>
        <p className="text-neutral-400 mt-4 max-w-lg mx-auto">
          Architecting scalable full-stack solutions with a focus on performance, 
          type-safety, and automated workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="p-6 bg-neutral-800/50 border border-neutral-700 rounded-xl hover:border-amber-400/50 transition-colors duration-300"
          >
            <h3 className="text-amber-400 font-semibold mb-6 text-sm uppercase tracking-widest">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.items.map((item, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:scale-105 transition-transform cursor-default"
                >
                  <Image 
                    src={item.logoPath} 
                    alt={`${item.label} logo`} 
                    width={32} 
                    height={32} 
                    className="mb-2  transition-all duration-300"
                  />
                  <span className="text-xs text-neutral-300 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3 text-neutral-500 text-sm italic">
        <span>#DistributedSystems</span>
        <span>•</span>
        <span>#SystemDesign</span>
        <span>•</span>
        <span>#PerformanceMonitoring</span>
      </div>
    </section>
  );
}