"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
}

export default function AnimatedCounter({ from, to, duration = 2.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(from, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current));
  
  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
