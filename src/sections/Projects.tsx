"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "WADE AI Defence System",
    description: "An advanced AI-driven defense system utilizing machine learning models to detect, analyze, and neutralize potential threats autonomously.",
    techStack: ["Python", "Machine Learning", "AI", "Cybersecurity"],
    githubUrl: "https://github.com/keval-piparotar/WADE-AI-Defence-System",
  },
  {
    title: "Auto-Reply AI Chatbot",
    description: "An automated AI-powered chatbot designed to handle and reply to messages using external APIs for natural language processing.",
    techStack: ["Python", "API Integration", "AI", "Chatbot"],
    githubUrl: "https://github.com/keval-piparotar/Auto-Reply-Ai-Chatbot-Using-API",
  },
  {
    title: "Jarvis",
    description: "A personal AI assistant inspired by Jarvis, capable of executing voice commands, managing tasks, and providing intelligent responses.",
    techStack: ["Python", "Voice Recognition", "AI Automation"],
    githubUrl: "https://github.com/keval-piparotar/Jarvis",
  },
  {
    title: "Tetris Game",
    description: "A classic Tetris game implementation in Python, featuring smooth mechanics, score tracking, and an engaging retro gaming experience.",
    techStack: ["Python", "Game Development", "Pygame"],
    githubUrl: "https://github.com/keval-piparotar/Tetris-Game",
  },
  {
    title: "TruthLens",
    description: "A machine learning pipeline designed for fake news detection, leveraging deep neural networks to cross-reference and verify digital claims. My Final Year Project.",
    techStack: ["TensorFlow", "Python", "Scikit-Learn", "HTML"],
    githubUrl: "https://github.com/keval-piparotar/Truthlens",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 overflow-hidden z-10">
      <div className="max-w-7xl w-full mx-auto flex flex-col space-y-24 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-emerald-400/30" />
            Featured Architectures
            <span className="w-12 h-[1px] bg-emerald-400/30" />
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="text-5xl md:text-7xl font-extrabold max-w-3xl tracking-[-0.03em] leading-tight text-white"
          >
            Computational <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Luxury.</span>
          </motion.h3>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[400px] gap-6 md:gap-8">
          {projects.map((project, index) => {
            let spanClass = "";
            if (index === 0) spanClass = "md:col-span-8 md:row-span-2";
            else if (index === 1) spanClass = "md:col-span-4 md:row-span-1";
            else if (index === 2) spanClass = "md:col-span-4 md:row-span-1";
            else if (index === 3) spanClass = "md:col-span-4 md:row-span-1";
            else if (index === 4) spanClass = "md:col-span-8 md:row-span-1";
            else spanClass = "md:col-span-4 md:row-span-1";

            return (
              <div key={project.title} className={spanClass}>
                <ProjectCard index={index} {...project} />
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
