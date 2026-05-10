"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 flex justify-between items-center w-full mt-6 md:mt-10 px-6 md:px-20 py-3 transition-all duration-300 ${
        scrolled ? "bg-surface-container-low/80 backdrop-blur-md border-b border-outline-variant/10" : ""
      }`}
    >
      <a className="font-display text-lg font-bold tracking-[0.1em] text-on-surface hover:text-on-surface-variant transition-colors uppercase" href="#hero">crichmondclark.dev</a>
      <div className="hidden md:flex items-center gap-10">
        <a className="text-on-surface-variant font-mono text-xs hover:text-on-surface transition-colors tracking-widest uppercase" href="#projects">Work</a>
        <a className="text-on-surface-variant font-mono text-xs hover:text-on-surface transition-colors tracking-widest uppercase" href="#about">About</a>
      </div>
      <a className="text-on-surface border-b border-transparent pb-1 font-mono text-xs flex items-center gap-2 hover:border-on-surface transition-all duration-300 group tracking-widest uppercase" href="#connect">
        <span className="group-hover:translate-x-1 transition-transform">Connect</span>
        <ArrowRight className="w-4 h-4 font-light group-hover:translate-x-2 transition-transform" />
      </a>
    </motion.nav>
  );
}