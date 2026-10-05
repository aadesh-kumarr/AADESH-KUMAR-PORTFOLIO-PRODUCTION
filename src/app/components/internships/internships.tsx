"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../hooks/use-outside-click";
import Lamp from "./header";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <Lamp />
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-stone-200 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] text-2xl h-full md:h-fit md:max-h-[90%]  flex flex-col bg-stone-800  sm:rounded-3xl no-scrollbar overflow-scroll"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={250}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-5/6 mt-5 mx-auto h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg "
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bol text-stone-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-stone-200"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4  py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Certificate
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    className="text-stone-200 text-xs md:text-sm lg:text-base h-fit md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 text-xl flex flex-col md:flex-row justify-between items-center bg-stone-900 mt-4 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row p-2">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={150}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 mx-auto w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-stone-200 text-3xl text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-stone-200 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-wite"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Full-Stack & Automation Developer",
    title: "CIS IT Solutions",
    src: "/CISIT.jpeg",
    link: "#",
    content: () => {
      return (
        <div className="flex flex-col gap-4 w-full">
          <div className="border-amber-400 text-lg border p-5 rounded bg-stone-900">
            <p className="text-stone-200">
              <span className="font-bold">April 2025 \u2014 Present.</span> Sole developer
              across five production products spanning multi-tenant SaaS, e-commerce,
              customer-experience analytics, online consultation and CRM.
            </p>
            <ul className="list-disc ml-5 font-semibold text-stone-200">
              <li>Owned the frontend end to end and contributed backend architecture on each product</li>
              <li>Rebuilt a client SaaS backend for multi-tenancy under senior mentorship</li>
              <li>Built and deployed AI agents for after-sales support, astrology consultation and CRM automation</li>
              <li>Designed an n8n and SERP API pipeline that researches, writes and publishes content autonomously</li>
              <li>Monitored technical search health with Google Search Console and Bing Webmaster Tools</li>
            </ul>
          </div>

          <div className="border-amber-400 border p-5 text-lg rounded bg-stone-900">
            <p className="text-stone-200">Engineering practice:</p>
            <ul className="list-disc ml-5 font-semibold text-stone-200">
              <li>Load testing with K6 and Grafana to surface bottlenecks before release</li>
              <li>Unit and integration test suites with Vitest, Jest and Supertest</li>
              <li>Socket.io real-time features, Agora video consultation, Razorpay payments</li>
              <li>Excalidraw architecture reviews before implementation; mentored three junior developers</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    description: "Junior Frontend Developer",
    title: "Perky Solutions",
    src: "/Perky.webp",
    link: "#",
    content: () => {
      return (
        <div className="flex flex-col gap-4 w-full">
          <div className="border-amber-400 text-lg border p-5 rounded bg-stone-900">
            <p className="text-stone-200">
              <span className="font-bold">December 2024 \u2014 March 2025.</span> Frontend
              development on dashboard and data-heavy interfaces.
            </p>
            <ul className="list-disc ml-5 font-semibold text-stone-200">
              <li>Built dynamic dashboards and advanced data tables with sorting, filtering and pagination</li>
              <li>Handled datasets of 10,000+ rows without degrading interface performance</li>
              <li>Improved UI consistency and reduced development time by 20%</li>
            </ul>
          </div>

          <div className="border-amber-400 border p-5 text-lg rounded bg-stone-900">
            <p className="text-stone-200">Takeaways:</p>
            <ul className="list-disc ml-5 font-semibold text-stone-200">
              <li>Responsive, cross-browser compatible interfaces as a baseline requirement</li>
              <li>First exposure to production release cycles and real client requirements</li>
            </ul>
          </div>
        </div>
      );
    },
  },

  {
    description: "Machine Learning & Data Science Internship",
    title: "Edureka",
    src: "/online_certificates/edureka_data_science_internship.webp",
    link: "/online_certificates/edureka_data_science_internship.webp",
    content: () => {
      return (
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="border-amber-400 text-lg border p-5 rounded bg-stone-900">
            <p className="text-stone-200">
              Completed a{" "}
              <span className="font-bold">2-month internship</span> focused on
              machine learning fundamentals and practical implementation.
            </p>
            <ul className="list-disc ml-5 font-semibold text-stone-200">
              <li>Supervised and unsupervised learning techniques</li>
              <li>Model evaluation and data preprocessing</li>
              <li>Basic neural network concepts</li>
            </ul>
          </div>

          <div className="border-amber-400 border p-5 text-lg rounded bg-stone-900">
            <p className="text-stone-200">
              Collaborated in a{" "}
              <span className="font-bold">20-member team</span> to implement and test
              ML models using:
            </p>
            <ul className="list-disc ml-5 font-semibold text-stone-200">
              <li>Linear regression</li>
              <li>Decision trees</li>
              <li>Introductory neural networks</li>
            </ul>
          </div>
        </div>
      );
    },
  },

  {
    description: "Market Analysis & Full Stack Development",
    title: "Lostronaunt",
    src: "/online_certificates/lostronaunt.webp",
    link: "/online_certificates/lostronaunt.webp",
    content: () => {
      return (
        <div className="flex flex-col gap-4 w-full mt-5">
          <div className="border-amber-400 text-lg border p-5 rounded bg-stone-900">
            <p className="text-stone-200">
              Completed a{" "}
              <span className="font-bold">1-month internship</span> focusing on
              market research and full-stack web development.
            </p>
            <ul className="list-disc ml-5 font-semibold text-stone-200">
              <li>Market trend analysis and requirement gathering</li>
              <li>User-centric application design</li>
            </ul>
          </div>

          <div className="border-amber-400 border p-5 text-lg rounded bg-stone-900">
            <p className="text-stone-200">
              Worked as a <span className="font-bold">Full Stack Developer</span>:
            </p>
            <ul className="list-disc ml-5 font-semibold text-stone-200">
              <li>Built frontend and backend using Next.js and Node.js</li>
              <li>Independently developed a complete functional web application</li>
            </ul>
          </div>

          <div className="border-amber-400 border p-5 text-lg rounded bg-stone-900">
            <p className="text-stone-200 font-bold">Key Achievement</p>
            <p className="text-stone-200">
              Developed a web application that reduced manual paperwork by{" "}
              <span className="font-bold">70%</span>.
            </p>
          </div>
        </div>
      );
    },
  },
];
