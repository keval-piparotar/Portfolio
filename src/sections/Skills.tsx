"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/white", projects: ["WADE AI Defence System", "Jarvis", "Auto-Reply AI Chatbot", "Tetris Game"], category: "Core", span: "md:col-span-8 md:row-span-2" },
  { name: "Machine Learning", iconUrl: "https://cdn.simpleicons.org/scikitlearn/white", projects: ["WADE AI Defence System", "TruthLens"], category: "AI", span: "md:col-span-4 md:row-span-1" },
  { name: "TensorFlow", iconUrl: "https://cdn.simpleicons.org/tensorflow/white", projects: ["TruthLens", "WADE AI Defence System"], category: "AI", span: "md:col-span-4 md:row-span-1" },
  { name: "NLP", iconUrl: "https://cdn.simpleicons.org/huggingface/white", projects: ["Auto-Reply AI Chatbot", "Jarvis"], category: "AI", span: "md:col-span-8 md:row-span-1" },
  { name: "React", iconUrl: "https://cdn.simpleicons.org/react/white", projects: ["Portfolio App", "Internal Admin Dashboards"], category: "Frontend", span: "md:col-span-4 md:row-span-1" },
  { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/white", projects: ["Portfolio App", "SSR Architectures"], category: "Frontend", span: "md:col-span-4 md:row-span-1" },
  { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/white", projects: ["API Gateways", "Backend Microservices"], category: "Backend", span: "md:col-span-4 md:row-span-1" },
  { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb/white", projects: ["WADE AI Data Storage", "Auth Systems"], category: "Backend", span: "md:col-span-4 md:row-span-1" },
  { name: "Git & Infrastructure", iconUrl: "https://cdn.simpleicons.org/github/white", projects: ["Used heavily across all 5+ Repositories"], category: "Tools", span: "md:col-span-12 md:row-span-1" },
];

const customEase: [number, number, number, number] = [0.32, 0.72, 0, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80, filter: "blur(12px)", scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.2, ease: customEase }
  },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden z-10">
      
      {/* Ethereal Glass Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
        <div className="absolute w-[900px] h-[900px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse translate-x-1/3 translate-y-1/3" style={{ animationDuration: '15s' }} />
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen -translate-x-1/4 -translate-y-1/4 animate-pulse" style={{ animationDuration: '20s' }} />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

      <div className="max-w-7xl w-full mx-auto flex flex-col space-y-32 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: customEase }}
            className="inline-flex items-center space-x-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest font-medium">
              Core Proficiencies
            </span>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1.2, ease: customEase }}
            className="text-6xl md:text-8xl lg:text-[100px] font-extrabold tracking-[-0.04em] leading-[1.1] text-white"
          >
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-300 via-gray-500 to-gray-800">Scale.</span>
          </motion.h3>
        </div>

        {/* Asymmetrical Bento Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(280px,auto)] gap-6 md:gap-8 relative z-10"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className={`p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/10 shadow-2xl group transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:bg-white/[0.04] col-span-1 ${skill.span}`}
            >
              {/* Inner Core Double-Bezel */}
              <div className="relative p-8 h-full rounded-[calc(2rem-0.375rem)] bg-[#050505] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col justify-between">
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {/* Skill Header */}
                <div className="relative z-10 flex flex-col space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      {/* Premium Floating Icon wrapper */}
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                        <img 
                          src={skill.iconUrl} 
                          alt={`${skill.name} icon`} 
                          className="w-6 h-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors duration-500 tracking-tight">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 px-4 py-1.5 bg-white/[0.03] rounded-full border border-white/10 group-hover:border-white/20 transition-colors uppercase tracking-widest backdrop-blur-md hidden sm:block">
                      {skill.category}
                    </span>
                  </div>
                </div>
                
                {/* Projects Used In (Z-Axis Stack) */}
                <div className="relative z-10 flex flex-col gap-4 mt-12">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors duration-500" />
                    Deployed In
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skill.projects.map((project) => (
                      <span 
                        key={project} 
                        className="text-xs md:text-sm font-medium text-gray-300 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-default shadow-sm"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
