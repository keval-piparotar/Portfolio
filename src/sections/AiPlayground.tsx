"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Bot, ShieldAlert, Cpu } from "lucide-react";

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

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default function AiPlayground() {
  return (
    <section id="ai" className="relative w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 flex items-center justify-center bg-transparent overflow-hidden z-10">
      
      {/* Ethereal Glass Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
        <div className="absolute w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse -translate-x-1/4 translate-y-1/4" style={{ animationDuration: '14s' }} />
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen translate-x-1/3 -translate-y-1/3" style={{ animationDuration: '18s' }} />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

      <div className="max-w-7xl w-full mx-auto flex flex-col space-y-24 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
            <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest font-medium">
              AI Playground
            </span>
          </motion.div>

          <motion.h3 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] leading-tight text-white"
          >
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Intelligence.</span>
          </motion.h3>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Terminal Widget (Double-Bezel) */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="lg:col-span-2 p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/10 shadow-2xl flex flex-col"
          >
            {/* Inner Core */}
            <div className="rounded-[calc(2rem-0.375rem)] bg-[#0A0A0A] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col h-full relative">
              <div className="px-5 py-4 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                </div>
                <span className="ml-4 text-[10px] font-mono text-gray-500 flex items-center gap-2 uppercase tracking-widest">
                  <Terminal className="w-3 h-3" /> keval_os_terminal
                </span>
              </div>
              <div className="p-8 font-mono text-sm sm:text-base text-gray-300 flex flex-col gap-3 h-72 overflow-y-auto relative z-10">
                <p className="text-emerald-400">keval@ai-server:~$ <span className="text-white">./init_neural_network.sh</span></p>
                <p className="text-gray-500 mt-2">[System] Booting Kepler Cluster...</p>
                <p className="text-gray-500">[System] Loading 175B Parameters...</p>
                <p className="text-purple-400 mt-2"><TypewriterText text="Success! Model inference ready. Awaiting prompt..." /></p>
                <p className="text-emerald-400 mt-4 flex items-center">
                  keval@ai-server:~$ <span className="w-2 h-4 bg-white animate-pulse ml-2 inline-block" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Chatbot Demo Widget (Double-Bezel) */}
          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/10 shadow-2xl flex flex-col group relative"
          >
            {/* Inner Core */}
            <div className="rounded-[calc(2rem-0.375rem)] bg-[#0A0A0A] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col h-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="px-5 py-4 border-b border-white/5 flex items-center gap-2 bg-white/[0.02] z-10">
                <Bot className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">AI Assistant</span>
              </div>
              <div className="p-6 flex flex-col gap-5 h-72 z-10">
                <div className="self-end bg-purple-500/10 border border-purple-500/20 px-5 py-3 rounded-[1.5rem] rounded-tr-sm text-sm text-gray-200 backdrop-blur-md shadow-sm">
                  What can you build?
                </div>
                <div className="self-start bg-white/[0.03] border border-white/10 px-5 py-3 rounded-[1.5rem] rounded-tl-sm text-sm text-gray-300 max-w-[90%] leading-relaxed backdrop-blur-md shadow-sm">
                  I specialize in full-stack AI. From fine-tuning models to building the high-performance Next.js interfaces that serve them.
                </div>
                <div className="mt-auto relative">
                  <input type="text" disabled placeholder="Type a message..." className="w-full bg-black border border-white/10 rounded-full px-5 py-3 text-sm text-gray-400 focus:outline-none cursor-not-allowed shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics Widgets */}
          <motion.div 
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2"
          >
            {/* Metric 1 Double-Bezel */}
            <div className="p-1.5 rounded-[1.5rem] bg-white/[0.02] border border-white/10 shadow-2xl group cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
              <div className="rounded-[calc(1.5rem-0.375rem)] bg-[#0A0A0A] p-6 flex items-center gap-6 relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="w-14 h-14 rounded-full bg-white/[0.03] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative z-10">
                  <ShieldAlert className="w-6 h-6 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white font-bold mb-1 tracking-tight">TruthLens Engine</h4>
                  <p className="text-xs text-gray-400 font-light tracking-wide">Real-time claim verification active.</p>
                </div>
              </div>
            </div>

            {/* Metric 2 Double-Bezel */}
            <div className="p-1.5 rounded-[1.5rem] bg-white/[0.02] border border-white/10 shadow-2xl group cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
              <div className="rounded-[calc(1.5rem-0.375rem)] bg-[#0A0A0A] p-6 flex items-center gap-6 relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="w-14 h-14 rounded-full bg-white/[0.03] flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative z-10">
                  <Cpu className="w-6 h-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white font-bold mb-1 tracking-tight">Model Optimizer</h4>
                  <p className="text-xs text-gray-400 font-light tracking-wide">Latency reduced by 43% in production.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
