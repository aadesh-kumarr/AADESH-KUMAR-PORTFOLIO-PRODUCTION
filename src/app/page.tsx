"use client";
import React from "react";
import TypingAnimation from "./components/main/typing";
import Portrait from "./components/main/portrait";
import About from "./components/main/about";
import Internship from "./components/internships/internships";
import Tech_Stack from "./components/main/tech_stack";
import { useRef } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
export default function Home() {
  // Reference to the Internship section
  const internshipRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <hr className="mt-20" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />
      <div
        className="bg-stone-800 
      max-w-full no-scrollbar overflow-x-hidden  px-9 "
      >
        <div className=" bg-black/20 rounded shadow-md shadow-amber-400/20 py-2 mt-5 lg:mt-20 lg:py-10 overflow-hidden">
          <div className="z-0 flex flex-col lg:flex-row lg:justify-evenly">
            <div className="">
              <TypingAnimation />
              <Portrait />
              <div className="mt-10 p-6 bg-amber-400/5 border border-amber-400/20 rounded-2xl flex items-center gap-6 mx-6">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-amber-400/30">
                  <Image src="/JappTattva.png" alt="Japp-tattva Logo" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-amber-400 font-bold text-sm uppercase tracking-tighter">Current Initiative</h4>
                  <p className="text-white font-medium text-lg">Engineering & Scaling Japp-tattva</p>
                  <p className="text-neutral-400 text-xs mt-1">
                    Managing the full digital lifecycle: Web Development, Content Strategy, and Brand Growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <Tech_Stack />
            </div>
          </div>
          <div className="overfolow-hidden -z-50-">
            <BackgroundBeams />
          </div>
        </div>
        <About internshipRef={internshipRef} />

        <div ref={internshipRef} className="my-24">
          <Internship />
        </div>
      </div>
    </>
  );
}
