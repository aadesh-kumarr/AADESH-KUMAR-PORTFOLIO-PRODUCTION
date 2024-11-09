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
       <Link href="" className='anim'> About Me</Link>
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
          <span>Final year student</span>
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
          <span>4 projects</span>
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
          <span>2 Internships</span>
        </div>
      </div>

      {/* About Me Text */}
      <div className="px-4 text-sm pt-5 text-justify space-y-4">
  <p>
    Hello! I&apos;m <span className="font-serif text-xl">Aadesh Kumar</span>, a{' '}
    <span className="font-medium text-amber-400">Final Year B.Tech CSE Student</span> with expertise in{' '}
    <span className="font-medium text-amber-400">Python</span> and{' '}
    <span className="font-medium text-amber-400">Django</span>. My focus is backend development, complemented by
    experience with <span className="font-medium text-amber-400">Next.js</span> for building dynamic, responsive apps.
  </p>

  <p>
    Outside of coding, I&apos;ve organized <span className="font-medium text-amber-400">college events</span> like{' '}
    <span className="font-medium text-amber-400">debates</span> and <span className="font-medium text-amber-400">coding quests</span>, which enhanced my teamwork and leadership skills.
  </p>

  <p>
    I&apos;m also passionate about tech education and run a <span className="font-medium text-amber-400">YouTube channel</span> on programming, where I share knowledge and engage with the tech community.
  </p>

  <p>
    My internship at <span className="font-medium text-amber-400">Edureka</span> provided valuable professional experience, helping me further develop my technical skills and industry insights.
  </p>

  <p>Let&apos;s connect and explore how we can create impactful digital solutions together!</p>
</div>



    </div>
      </Vortex>
  );
}
