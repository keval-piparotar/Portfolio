"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
  className?: string;
}

export default function ProjectCard({ title, description, techStack, githubUrl, liveUrl, index, className = "" }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay: (index % 3) * 0.15, ease: [0.32, 0.72, 0, 1] }}
      style={{ perspective: "1200px" }}
      className={`w-full h-full ${className}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-[350px] md:h-full p-1.5 md:p-2 rounded-[2rem] bg-white/[0.02] border border-white/10 group cursor-pointer shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
      >
        {/* Double-Bezel Inner Core */}
        <div style={{ transformStyle: "preserve-3d" }} className="relative w-full h-full rounded-[calc(2rem-0.375rem)] md:rounded-[calc(2rem-0.5rem)] bg-[#0A0A0A] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#0A0A0A] to-[#000] opacity-80 group-hover:opacity-40 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
          
          {/* Animated Glow on Hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 blur-2xl pointer-events-none"
          />

          {/* Inner Content with Parallax z-translation */}
          <div 
            style={{ transform: "translateZ(40px)" }}
            className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none"
          >
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              {techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-[10px] uppercase tracking-widest font-mono rounded-full bg-white/[0.03] border border-white/10 text-gray-400 backdrop-blur-md">
                  {tech}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors duration-500">
              {title}
            </h3>
            <p className="text-gray-400 text-sm max-w-md line-clamp-2 md:line-clamp-3 mb-6 group-hover:text-gray-200 transition-colors duration-500">
              {description}
            </p>

            <div className="flex items-center gap-3 pointer-events-auto mt-auto">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-black bg-white hover:bg-gray-200 transition-colors px-5 py-2.5 rounded-full">
                  Preview <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 transition-colors px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10">
                  GitHub <Code2 className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
