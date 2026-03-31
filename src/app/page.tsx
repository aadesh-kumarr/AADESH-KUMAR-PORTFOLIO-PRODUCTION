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
import Link from "next/link";

export default function Home() {
  const internshipRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <hr className="mt-20" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />
      <div className="bg-stone-800 max-w-full no-scrollbar overflow-x-hidden px-9">
        <div className="bg-black/20 rounded shadow-md shadow-amber-400/20 py-2 mt-5 lg:mt-20 lg:py-10 overflow-hidden relative">
          <div className="z-10 relative flex flex-col lg:flex-row lg:justify-evenly">
            <div>
              <TypingAnimation />
              <Portrait />

              {/* ✅ Poori card pe Link wrap kiya, z-10 diya */}
              <Link
                href="https://www.japptattva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-10 mx-6 cursor-pointer"
              >
                <div className="p-6 bg-amber-400/5 border border-amber-400/20 rounded-2xl flex items-center gap-6 hover:bg-amber-400/10 transition-colors">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-amber-400/30">
                    <Image
                      src="/JappTattva.png"
                      alt="Japp-tattva Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-amber-400 font-bold text-sm uppercase tracking-tighter">
                      Current Initiative
                    </h4>
                    <p className="text-white font-medium text-lg">
                      Engineering & Scaling Japp-tattva
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      Managing the full digital lifecycle: Web Development,
                      Content Strategy, and Brand Growth.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Tech_Stack />
            </div>
          </div>

          {/* ✅ pointer-events-none — beam clicks block nahi karegi */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
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