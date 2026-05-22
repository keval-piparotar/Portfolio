"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const customEase = [0.32, 0.72, 0, 1];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 80, filter: "blur(12px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 1.2,
      ease: customEase,
    },
  }),
};

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Mouse tracking physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor follow effect
  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    // Set initial position to center of screen
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-transparent px-4 py-32 md:py-48">
      {/* Ethereal Glass Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80">
        
        {/* Static Ambience */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/30 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        
        {/* Interactive Mouse Follow Glow */}
        {isMounted && (
          <motion.div 
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-400/25 rounded-full blur-[100px] mix-blend-screen pointer-events-none -ml-[250px] -mt-[250px]" 
            style={{ 
              x: glowX, 
              y: glowY 
            }} 
          />
        )}
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

      {/* Cinematic Content */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        
        {/* Eyebrow Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="mb-8 inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest font-medium">
            Keval OS // Online
          </span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold tracking-[-0.04em] mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500"
        >
          Keval Piparotar
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-lg md:text-2xl font-light text-gray-400 mb-16 max-w-2xl tracking-[-0.01em] leading-relaxed"
        >
          AI/ML Developer building <span className="text-gray-200 font-normal">intelligent digital experiences.</span>
        </motion.h2>

        {/* Call to Actions */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Double-Bezel Primary CTA */}
          <div className="p-1.5 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl group cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
            <a href="#work" className="flex items-center pl-8 pr-2 py-2 rounded-[calc(2.5rem-0.375rem)] bg-white text-black font-semibold text-sm tracking-wide transition-all duration-500 group-hover:bg-gray-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
              Explore Work
              {/* Nested Trailing Icon */}
              <div className="ml-6 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton variant="secondary" href="/resume.pdf" download="Keval_Piparotar_Resume.pdf" className="rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md px-6 py-4 hover:bg-white/10 hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] text-sm tracking-wide">
              Resume <Download className="w-4 h-4 ml-2 inline-block opacity-70" />
            </MagneticButton>
            
            <MagneticButton variant="secondary" href="mailto:kevalpiparotar4@gmail.com" className="rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md px-6 py-4 hover:bg-white/10 hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] text-sm tracking-wide">
              Contact <Mail className="w-4 h-4 ml-2 inline-block opacity-70" />
            </MagneticButton>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
