"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, FolderGit2, Briefcase, Terminal, Mail } from "lucide-react";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "Profile" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "projects", icon: FolderGit2, label: "Projects" },
  { id: "ai", icon: Terminal, label: "AI Playground" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function NavigationDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    // Reactive Intersection Observer to track scroll position
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = navItems.findIndex(item => item.id === entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { 
        // Trigger exactly when the section crosses the vertical center of the screen
        // This fixes the issue where very tall sections never hit a 0.5 threshold
        rootMargin: "-50% 0px -50% 0px" 
      }
    );

    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] hidden md:flex items-center p-2 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)]"
    >
      <div className="flex items-center gap-2">
        {navItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isActive = activeIndex === index;
          
          return (
            <button
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleScrollTo(item.id)}
              className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group ${
                isActive 
                  ? 'bg-emerald-500/20 border border-emerald-500/30 shadow-[inset_0_0_20px_rgba(52,211,153,0.2)]' 
                  : 'hover:bg-white/10 border border-transparent'
              }`}
            >
              {isHovered && (
                <motion.div 
                  layoutId="dock-indicator"
                  className="absolute -top-12 bg-black/90 text-white text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 pointer-events-none whitespace-nowrap shadow-2xl backdrop-blur-md"
                >
                  {item.label}
                </motion.div>
              )}
              <item.icon className={`w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isHovered || isActive 
                  ? 'scale-125 text-emerald-400 -translate-y-1 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]' 
                  : 'text-gray-500 hover:text-gray-300'
              }`} />
              
              {/* Reactive Active Indicator */}
              {isActive && !isHovered && (
                <motion.div 
                  layoutId="active-dot"
                  className="absolute bottom-1 w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" 
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
