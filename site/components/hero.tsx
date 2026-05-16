"use client";

import { HeroBackground } from "@/components/hero-background";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <main id="hero" className="relative min-h-[90vh] flex items-center pt-40 pb-32 px-6 md:px-20 overflow-hidden">
      <HeroBackground />

      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[65%] text-left flex flex-col items-start pt-10"
        >
          <div className="mb-14 flex items-center gap-4">
            <div className="w-8 h-[1px] bg-outline-variant/60"></div>
            <span className="font-mono text-xs text-on-surface-variant tracking-[0.2em] uppercase">Full-Stack Developer · DevOps · AI Infrastructure</span>
          </div>

          <h1 className="font-display text-5xl md:text-[88px] font-bold text-on-surface mb-12 max-w-4xl leading-[1.1] tracking-tight">
            Building web systems,
            <span className="block mt-4 font-normal text-surface-tint">automation & AI tooling</span>
          </h1>

          <p className="font-body text-xl text-on-surface-variant/80 max-w-2xl mb-16 pl-4 border-l border-outline-variant/20 leading-relaxed">
            I build full-stack applications, backend services, deployment workflows, and internal tools — with a growing focus on DevOps, platform engineering, and AI infrastructure.
          </p>

          <div className="flex gap-8 items-center">
            <a className="text-on-surface border-b border-outline-variant/40 pb-2 font-mono text-xs flex items-center gap-3 hover:border-on-surface transition-all duration-300 group uppercase tracking-widest" href="#projects">
              <span className="group-hover:translate-x-1 transition-transform">View Projects</span>
              <ArrowRight className="w-4 h-4 font-light group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="hidden md:flex w-[35%] justify-center relative items-center"
        >
          <div className="absolute w-[400px] h-[400px] rounded-full border border-outline-variant/10 animate-subtle-rotate"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full border border-outline-variant/20 animate-subtle-rotate" style={{ animationDirection: "reverse", animationDuration: "180s" }}></div>
          <div className="w-32 h-32 border-[0.5px] border-outline-variant/40 rotate-45 flex items-center justify-center bg-surface-container-lowest/50 backdrop-blur-sm">
            <div className="w-16 h-16 border-[0.5px] border-outline-variant/60 -rotate-45"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}