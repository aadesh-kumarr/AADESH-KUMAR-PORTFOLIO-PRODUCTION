"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function MotionEffects() {
  const pathname = usePathname();
  const gridRef = useRef<HTMLSpanElement>(null);
  const firstOrbRef = useRef<HTMLSpanElement>(null);
  const secondOrbRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = document.querySelectorAll<HTMLElement>(
      "main section:not(.hero-glow), main .page-intro, main article, main .motion-item"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    elements.forEach((element) => {
      element.classList.add("motion-reveal");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("motion-reveal", "is-visible"));
    };
  }, [pathname]);

  useEffect(() => {
    const grid = gridRef.current;
    const firstOrb = firstOrbRef.current;
    const secondOrb = secondOrbRef.current;
    const ring = ringRef.current;
    if (!grid || !firstOrb || !secondOrb || !ring) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pointerX = 0;
    let pointerY = 0;
    let scroll = 0;
    let targetX = 0;
    let targetY = 0;
    let targetScroll = 0;
    let frame = 0;

    const animate = () => {
      pointerX += (targetX - pointerX) * 0.08;
      pointerY += (targetY - pointerY) * 0.08;
      scroll += (targetScroll - scroll) * 0.08;

      grid.style.transform = `translate3d(${pointerX * -9}px, ${pointerY * -9 - scroll * 30}px, 0)`;
      firstOrb.style.transform = `translate3d(${pointerX * 52}px, ${pointerY * 38 - scroll * 110}px, 0)`;
      secondOrb.style.transform = `translate3d(${pointerX * -38}px, ${pointerY * -28 + scroll * 75}px, 0)`;
      ring.style.transform = `translate3d(${pointerX * -26}px, ${pointerY * 24 - scroll * 65}px, 0) rotate(${scroll * 18}deg)`;

      if (Math.abs(targetX - pointerX) + Math.abs(targetY - pointerY) + Math.abs(targetScroll - scroll) > 0.003) {
        frame = window.requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(animate); };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      targetX = event.clientX / window.innerWidth - 0.5;
      targetY = event.clientY / window.innerHeight - 0.5;
      schedule();
    };
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      schedule();
    };

    onScroll();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div className="ambient-scene" aria-hidden="true">
      <span ref={gridRef} className="ambient-grid" />
      <span ref={firstOrbRef} className="ambient-orb ambient-orb-one" />
      <span ref={secondOrbRef} className="ambient-orb ambient-orb-two" />
      <span ref={ringRef} className="ambient-ring" />
    </div>
  );
}
