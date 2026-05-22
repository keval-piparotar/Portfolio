"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

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

export default function Contact() {

  return (
    <section id="contact" className="relative w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 overflow-hidden z-10">
      {/* Ethereal Glass Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
        <div className="absolute w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse translate-x-1/4 translate-y-1/4" style={{ animationDuration: '10s' }} />
        <div className="absolute w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen -translate-x-1/3" style={{ animationDuration: '14s' }} />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Editorial Split Typography & Socials */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-12 justify-center"
          >
            <div className="space-y-8">
              {/* Eyebrow Badge */}
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest font-medium">
                  Connection Protocol
                </span>
              </motion.div>

              <motion.h3 
                custom={1}
                variants={fadeUpVariants}
                className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] leading-tight text-white"
              >
                Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Build</span> Together.
              </motion.h3>

              <motion.p 
                custom={2}
                variants={fadeUpVariants}
                className="text-lg font-light text-gray-400 leading-relaxed max-w-md"
              >
                Whether you have a complex AI project proposal, a frontend architecture question, or just want to say hi, my inbox is always open.
              </motion.p>
            </div>

            {/* Terminal Contact - Double Bezel */}
            <motion.div custom={3} variants={fadeUpVariants} className="p-1.5 rounded-[1.5rem] bg-white/[0.02] border border-white/10 shadow-2xl max-w-md">
              <div className="rounded-[calc(1.5rem-0.375rem)] bg-[#0A0A0A] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">connect.sh</span>
                </div>
                <div className="p-5 font-mono text-sm flex flex-col gap-4">
                  <p className="text-gray-500 text-xs"># Execute email protocol</p>
                  <div className="flex items-center justify-between bg-black p-3 rounded-lg border border-white/5 group hover:border-emerald-500/30 transition-colors duration-500">
                    <span className="text-emerald-400 select-all tracking-tight">kevalpiparotar4@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Double Bezel Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            custom={2}
            className="flex items-center"
          >
            <div className="w-full p-2 rounded-[2rem] bg-white/[0.02] border border-white/10 shadow-2xl relative group">
              {/* Inner Core */}
              <div className="w-full rounded-[calc(2rem-0.5rem)] bg-[#0A0A0A] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <form className="flex flex-col space-y-8 relative z-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-500 resize-none"
                      placeholder="Ready to build something extraordinary? Let&apos;s talk about your next big idea."
                    />
                  </div>

                  <div className="pt-4">
                    {/* Double-Bezel Primary CTA */}
                    <div className="p-1.5 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl group/btn cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                      <button type="button" className="w-full flex items-center justify-between pl-8 pr-2 py-2 rounded-[calc(2.5rem-0.375rem)] bg-white text-black font-semibold text-sm tracking-wide transition-all duration-500 group-hover/btn:bg-gray-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                        Transmit Message
                        <div className="ml-6 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:translate-x-1 group-hover/btn:scale-105">
                          <Send className="w-4 h-4 text-black" />
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
