"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean | string;
}

export default function MagneticButton({ children, className, onClick, variant = "secondary", href, download }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-3 rounded-full font-mono text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 group inline-flex items-center justify-center";
  const variants = {
    primary: "bg-white text-black hover:scale-105",
    secondary: "border border-keval-accent1/50 text-white hover:bg-keval-accent1/10 hover:border-keval-accent1",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      {...{ref: buttonRef as unknown as React.Ref<HTMLAnchorElement & HTMLButtonElement>}}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
      {...(href ? { href, download } : {})}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
