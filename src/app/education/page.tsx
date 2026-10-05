import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [  
    {
      title: "B.Tech, Computer Science Engineering",
      content: (
        
        <div className="bg-neutral-800 p-5 rounded border-amber-400 border lg:w-1/2">
          <p className="text-neutral-200 font-normal mb-8">
            Doon Institute of Engineering and Technology, Rishikesh <br />Graduated in 2025
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built a foundation in computer science, algorithms and full-stack development before
            moving into professional product engineering, AI automation and search-driven systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/education/dgi.jpg"
              alt="Education Background"
              width={500}
              height={500}
              className="rounded-lg w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "12th Grade",
      content: (
        <div className="bg-neutral-800 p-5 rounded border-amber-400 border lg:w-1/2">
          <p className="text-neutral-200 font-normal mb-8">
            Bombay Public School, Dehradun - Completed in 2021
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Specialized in Physics, Chemistry, and Mathematics. Participated in technical fests and science fairs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/education/bv.jpeg"
              alt="12th Grade Background"
              width={500}
              height={500}
              className="rounded-lg w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "10th Grade",
      content: (
        <div className="bg-neutral-800 p-5 rounded border-amber-400 border lg:w-1/2">
          <p className="text-neutral-200 font-normal mb-8">
            DAV Centenary Public School, Haridwar - Completed in 2019
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Studied Science and Mathematics. Actively participated in school events, including debates and coding competitions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/education/dav.jpeg"
              alt="10th Grade Background"
              width={500}
              height={500}
              className="rounded-lg w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black/95">
      <hr className="mt-20" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />
      <div className="pl-6">
      <Timeline data={data} />
      </div>
    </div>
  );
}
