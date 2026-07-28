import Link from "next/link";

const profiles = [
  {
    href: "https://www.upwork.com/freelancers/~019942dcd88128cf12?mp_source=share",
    color: "#14a800",
    label: "Upwork",
    title: "Hire me for Freelance Work",
    subtitle: "Full-stack dev · Automation · SaaS",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="#14a800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-.801-1.498-1.41-3.3-1.768-4.83H9.362v5.827a2.549 2.549 0 0 1-2.545 2.545 2.549 2.549 0 0 1-2.545-2.545V4.554H2.157v5.827c0 2.6 2.11 4.71 4.71 4.71 2.6 0 4.71-2.11 4.71-4.71v-.979a12.68 12.68 0 0 0 1.73 3.233l-1.461 6.861h2.155l1.046-4.925c1.093.81 2.348 1.293 3.714 1.293C21.498 15.864 24 13.36 24 10.318c0-3.04-2.502-5.3-5.439-5.3z" />
      </svg>
    ),
  },
  {
    href: "https://www.producthunt.com/@aadesh_kumar4",
    color: "#da552f",
    label: "Product Hunt",
    title: "Check out my launches",
    subtitle: "Products · Upvotes · Reviews",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="#da552f"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 0 0 0-3.6zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.8V6h5.804a4.2 4.2 0 0 1 0 8.4z" />
      </svg>
    ),
  },
];

export default function SocialProfiles() {
  return (
    <div className="mt-6 mx-6">
      <p className="text-neutral-500 text-xs uppercase tracking-widest mb-3 font-semibold">
        Find me on
      </p>
      <div className="flex flex-col gap-3">
        {profiles.map(({ href, color, label, title, subtitle, icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
          >
            <div
              className="p-4 rounded-2xl flex items-center gap-4 transition-colors group"
              style={{
                backgroundColor: `${color}0d`,
                border: `1px solid ${color}40`,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor = `${color}1a`)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor = `${color}0d`)
              }
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{
                  border: `1px solid ${color}4d`,
                  backgroundColor: `${color}1a`,
                }}
              >
                {icon}
              </div>

              {/* Text */}
              <div>
                <h4
                  className="font-bold text-xs uppercase tracking-tighter"
                  style={{ color }}
                >
                  {label}
                </h4>
                <p className="text-white font-medium text-sm">{title}</p>
                <p className="text-neutral-400 text-xs mt-0.5">{subtitle}</p>
              </div>

              {/* External link arrow */}
              <svg
                className="ml-auto w-4 h-4 flex-shrink-0 text-neutral-500 transition-colors"
                style={{ color: undefined }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                onMouseEnter={(e) =>
                  ((e.currentTarget as SVGSVGElement).style.color = color)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as SVGSVGElement).style.color = "")
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
