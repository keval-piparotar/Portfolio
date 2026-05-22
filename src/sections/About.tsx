"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { label: "Deployed Projects", value: 5, suffix: "" },
  { label: "AI Systems Engineered", value: 4, suffix: "" },
  { label: "Core Technologies", value: 9, suffix: "+" },
];

const customEase: [number, number, number, number] = [0.32, 0.72, 0, 1];

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

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen py-32 md:py-48 px-4 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden z-10">
      
      {/* Ethereal Glass Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
        <div className="absolute w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse -translate-x-1/4 translate-y-1/4" style={{ animationDuration: '11s' }} />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen translate-x-1/3 -translate-y-1/4" style={{ animationDuration: '15s' }} />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column - Text Reveal */}
        <div className="flex flex-col space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Eyebrow Badge */}
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest font-medium">
                System Profile
              </span>
            </motion.div>

            <motion.h3 
              custom={1}
              variants={fadeUpVariants}
              className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white"
            >
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Intelligence</span> into Digital Products.
            </motion.h3>

            <motion.div 
              custom={2}
              variants={fadeUpVariants}
              className="space-y-6 text-gray-400 font-light text-lg leading-relaxed max-w-xl"
            >
              <p>
                I specialize in bridging the gap between raw machine learning and human-centric web design. From engineering autonomous AI defence systems (WADE) to building deepfake detection models (TruthLens) and intelligent assistants (Jarvis).
              </p>
              <p>
                My mindset revolves around building highly secure, problem-solving software. Whether it&apos;s optimizing a TensorFlow model for real-time analysis, or orchestrating a seamless React frontend, I build scalable systems that feel like magic.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Stats & Experience Cards (Double-Bezel) */}
        <div className="flex flex-col gap-6 relative">
          
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: customEase }}
                className={`p-1.5 rounded-[1.5rem] bg-white/[0.02] border border-white/10 shadow-2xl group cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 ${i === 0 ? "col-span-2" : "col-span-1"}`}
              >
                {/* Inner Core */}
                <div className="p-6 h-full rounded-[calc(1.5rem-0.375rem)] bg-[#0A0A0A] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative flex flex-col justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10 text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-2 flex items-center">
                    <AnimatedCounter from={0} to={stat.value} />
                    <span className="text-emerald-400 font-medium ml-1">{stat.suffix}</span>
                  </div>
                  <div className="relative z-10 text-[10px] sm:text-xs text-gray-500 font-mono tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.4, ease: customEase }}
            className="p-1.5 rounded-[1.5rem] bg-white/[0.02] border border-white/10 shadow-2xl relative group"
          >
            {/* Inner Core */}
            <div className="p-8 rounded-[calc(1.5rem-0.375rem)] bg-[#0A0A0A] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h4 className="relative z-10 text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                Full-Stack AI Synergy
              </h4>
              <p className="text-gray-400 leading-relaxed font-light mb-8 max-w-2xl">
            I specialize in full-stack AI development, bridging the gap between raw machine learning models and high-performance, user-centric interfaces. My expertise spans building scalable microservices, optimizing inference pipelines, and crafting Next.js architectures that don&apos;t just work—they perform flawlessly.
          </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
