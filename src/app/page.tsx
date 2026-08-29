"use client";
import React, { useRef } from "react";
import Hero from "./components/main/hero";
import FeaturedWork from "./components/main/featured_work";
import About from "./components/main/about";
import Internship from "./components/internships/internships";
import Tech_Stack from "./components/main/tech_stack";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  const internshipRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <hr className="mt-20" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />

      <div className="no-scrollbar max-w-full overflow-x-hidden bg-stone-800">
        {/* Hero */}
        <div className="relative mt-5 overflow-hidden rounded bg-black/20 py-6 shadow-md shadow-amber-400/20 lg:mt-16 lg:py-12">
          <div className="relative z-10">
            <Hero />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <BackgroundBeams />
          </div>
        </div>

        {/* Flagship products */}
        <FeaturedWork />

        {/* Technical ecosystem */}
        <Tech_Stack />

        {/* About */}
        <About internshipRef={internshipRef} />

        {/* Experience */}
        <div ref={internshipRef} className="my-24">
          <Internship />
        </div>
      </div>
    </>
  );
}
