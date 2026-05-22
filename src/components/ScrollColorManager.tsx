"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ScrollColorManager({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      keyframes: {
        backgroundColor: ["#050505", "#03100c", "#0a050f", "#050505"],
        ease: "none"
      },
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-[#050505]">
      {children}
    </div>
  );
}
