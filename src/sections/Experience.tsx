"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior AI Engineer",
    company: "TechNova Solutions",
    period: "2024 - Present",
    description: "Leading the development of highly scalable machine learning pipelines for predictive analytics. Architecting Next.js frontends to interface with massive LLM infrastructures.",
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Quantum Build",
    period: "2022 - 2024",
    description: "Built and maintained enterprise-grade React applications. Optimized database queries in MongoDB and integrated third-party AI APIs to enhance user experiences.",
  },
  {
    id: 3,
    role: "Data Science Intern",
    company: "DataSphere",
    period: "2021 - 2022",
    description: "Assisted in cleaning datasets, training initial TensorFlow models, and deploying Python-based backend microservices for internal data processing.",
  }
];

const customEase: [number, number, number, number] = [0.32, 0.72, 0, 1];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: customEase }
  },
};

interface ExperienceData {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

const ExperienceCard = ({ exp, isEven }: { exp: ExperienceData, isEven: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:justify-between w-full`}>
      
      {/* Timeline Dot with Pulse/Float Animation */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)] -translate-x-1/2 z-10"
      >
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-emerald-400"
        />
      </motion.div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-5/12" />

      {/* Card Content (3D Double-Bezel) */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: customEase }}
        className={`w-full md:w-5/12 pl-24 md:pl-0 pt-2 md:pt-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
        style={{ perspective: 1000 }}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="p-1.5 rounded-[1.5rem] bg-white/[0.02] border border-white/10 shadow-2xl relative transition-colors duration-500 hover:bg-white/[0.04]"
        >
          {/* Inner Core */}
          <div 
            className="p-8 rounded-[calc(1.5rem-0.375rem)] bg-[#0A0A0A] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative flex flex-col space-y-4"
            style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent transition-opacity duration-700 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            
            <motion.div 
              className="relative z-10"
              style={{ transform: "translateZ(30px)" }}
            >
              <span className="inline-block text-[10px] font-mono px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-emerald-400 mb-6 uppercase tracking-widest">{exp.period}</span>
              <motion.h4 
                animate={{ color: isHovered ? "#34d399" : "#ffffff" }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold mb-2 tracking-tight"
              >
                {exp.role}
              </motion.h4>
              <h5 className="text-sm text-gray-400 mb-6 font-mono tracking-widest uppercase">{exp.company}</h5>
              <motion.p 
                animate={{ color: isHovered ? "#d1d5db" : "#6b7280" }}
                transition={{ duration: 0.3 }}
                className="text-sm leading-relaxed font-light"
              >
                {exp.description}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="relative w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 bg-transparent overflow-hidden z-10">
      
      {/* Ethereal Glass Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
        <div className="absolute w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse translate-x-1/4 -translate-y-1/4" style={{ animationDuration: '15s' }} />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

      <div className="max-w-5xl w-full mx-auto flex flex-col space-y-24 relative z-10" ref={containerRef}>
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest font-medium">
              System History
            </span>
          </motion.div>

          <motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] leading-tight text-white"
          >
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Timeline.</span>
          </motion.h3>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
          
          {/* Animated Glowing Optical Fiber Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-emerald-400 via-purple-500 to-transparent -translate-x-1/2 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col space-y-20 mt-8 relative z-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} isEven={index % 2 === 0} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
