"use client";
import Image from 'next/image';
import { RefObject } from 'react';
import Link from 'next/link';
import { Vortex } from '@/components/ui/vortex';

interface AboutProps {
  internshipRef: RefObject<HTMLDivElement>; // Accept ref as a prop
}

export default function About({ internshipRef }: AboutProps) {

  // Function to handle scrolling to Internship
  const handleScrollToInternship = () => {
    if (internshipRef.current) {
      internshipRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Vortex
      backgroundColor=''
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className=" "
    >
      <div className="border  border-amber-400/10 text-zinc-200 sm:mb-80 mb-60  mt-32 lg:mt-80  ">
        <p className="anim corsor-default text-center font-serif py-5  text-2xl">
          <Link href="" className='anim'>About Me</Link>
        </p>

        <div className="flex flex-row justify-between overflow-hidden">
          {/* First Block */}
          <Link href={'/education'} className="svgs">
            <Image
              src="/svgs/education.svg"
              alt="Portrait of Aadesh Kumar"
              width={200}
              height={10}
              className="rounded p-1"
            />
            <span>B.tech CSE</span>
          </Link>

          {/* Second Block */}
          <Link href={'/projects'} className="svgs">
            <Image
              src="/svgs/techie.svg"
              alt="Techie icon"
              width={200}
              height={100}
              className="rounded p-1"
            />
            <span>Multiple Technologies</span>
          </Link>

          {/* Third Block */}
          <div className="svgs">
            <Image
              src="/svgs/confident.svg"
              alt="Confident icon"
              width={200}
              height={100}
              className="rounded p-1"
            />
            <span>Confident</span>
          </div>

          {/* Fourth Block (Scroll to Internship) */}
          <div
            className="svgs"
            onClick={handleScrollToInternship}
          >
            <Image
              src="/svgs/internships.svg"
              alt="Internships icon"
              width={200}
              height={10}
              className="rounded p-1"
            />
            <span>Working Proffesional</span>
          </div>
        </div>

        {/* About Me Text */}
        <div className="px-4 text-sm pt-5 text-justify space-y-4">
          <p>
            Hi, I’m <span className="font-serif text-xl">Aadesh Kumar</span>, a
            <span className="font-medium text-amber-400"> Full Stack Developer </span>
            currently working at
            <span className="font-medium text-amber-400"> CIS IT Solutions</span>. I specialize in building scalable, high-performance web applications using
            <span className="font-medium text-amber-400"> Next.js</span>,
            <span className="font-medium text-amber-400"> React</span>, and modern backend architectures.
          </p>

          <p>
            I have hands-on experience working on
            <span className="font-medium text-amber-400"> multi-tenant SaaS systems</span>,
            <span className="font-medium text-amber-400"> RESTful APIs</span>,
            <span className="font-medium text-amber-400"> Redis caching</span>, and
            <span className="font-medium text-amber-400"> cron jobs</span>, focusing on performance optimization, clean architecture, and maintainable codebases.
          </p>

          <p>
            My work spans across dashboards, admin panels, e-commerce platforms, and automation tools, where I’ve improved UI consistency, reduced load times, and enhanced user engagement through thoughtful design and efficient data handling.
          </p>

          <p>
            Beyond development, I actively contribute to technical planning using tools like
            <span className="font-medium text-amber-400"> Excalidraw</span> for flow design and collaboration, helping teams move faster and build with clarity.
          </p>

          <p>
            I’m passionate about continuous learning, building real-world products, and creating solutions that balance user experience with solid engineering principles.
          </p>
        </div>



      </div>
    </Vortex>
  );
}