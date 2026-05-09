"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 flex items-center gap-6">
          <span className="font-mono text-xs text-on-surface-variant tracking-[0.2em] uppercase">About</span>
          <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-body text-on-surface-variant/80 text-lg leading-relaxed mb-8">
            Full-stack developer focused on building premium web experiences. I work across the stack — from Django backends to React frontends — with an emphasis on clean architecture and intentional design.
          </p>
          <div className="flex flex-wrap gap-4">
            {["TypeScript", "React", "Next.js", "Django", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-widest px-3 py-1 border border-outline-variant/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}