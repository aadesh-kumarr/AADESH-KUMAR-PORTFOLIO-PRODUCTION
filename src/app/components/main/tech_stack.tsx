type TechStackItem = {
  id: number;
  label: string;
  logo: JSX.Element;
};

const techStack: TechStackItem[] = [
  { id: 1, label: "Next Js", logo: <img src={"/svgs/tech_stack/nextjs.svg"} alt="Next Js Logo" className="h-6 w-6" /> },
  { id: 2, label: "React Js", logo: <img src={'/svgs/tech_stack/reactjs.svg'} alt="React Js Logo" className="h-6 w-6" /> },
  { id: 3, label: "MongoDB", logo: <img src={'/svgs/tech_stack/mongodb.svg'} alt="MongoDB Logo" className="h-6 w-6" /> },
  { id: 4, label: "Prisma", logo: <img src={'/svgs/tech_stack/prisma.svg'} alt="Prisma Logo" className="h-6 w-6" /> },
  { id: 5, label: "Shad CN", logo: <img src={'/svgs/tech_stack/shadcn-ui-seeklogo.png'} alt="Shad CN Logo" className="h-6 w-6" /> },
  { id: 6, label: "Data tables", logo: <img src={'/svgs/tech_stack/database-table.svg'} alt="Data Tables Logo" className="h-6 w-6" /> },
];

export default function Tech_Stack() {
  return (
    <div className="tech-stack-container text-center mt-8 mx-5 bg-neutral-700 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-amber-400 underline underline-offset-auto">Tech Stack</h2>
      <div className="px-5 grid grid-cols-2 sm:grid-cols-3  gap-4">
        {techStack.map((item) => (
          <button
            key={item.id}
            className="button p-4 border border-amber-400 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 hover:scale-105 duration-300 bg-neutral-700 text-amber-200"
          >
            <div className="logo mb-2 flex justify-center items-center">{item.logo}</div>
            <span className="text_button text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      <p className="pt-10">And many more</p>
    </div>
  );
}