"use client";

import { motion } from "motion/react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mt-auto bg-surface-container-lowest border-t border-outline-variant/10 w-full px-6 md:px-20 py-32 relative z-10"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <a className="font-display text-2xl font-bold tracking-[0.1em] text-on-surface block mb-6 uppercase" href="#hero">crichmondclark.dev</a>
          <p className="font-body text-sm text-on-surface-variant/60 uppercase tracking-wider">© {year} Connor Richmond. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-16">
          <a className="font-mono text-xs text-on-surface-variant hover:text-on-surface hover:-translate-y-1 transition-all duration-300 tracking-widest uppercase" href="https://github.com/crichmond-clark" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="font-mono text-xs text-on-surface-variant hover:text-on-surface hover:-translate-y-1 transition-all duration-300 tracking-widest uppercase" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="font-mono text-xs text-on-surface-variant hover:text-on-surface hover:-translate-y-1 transition-all duration-300 tracking-widest uppercase" href="https://read.cv" target="_blank" rel="noopener noreferrer">Read.cv</a>
        </div>
      </div>
    </motion.footer>
  );
}