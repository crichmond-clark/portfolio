"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/content";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 flex items-center gap-6">
          <span className="font-mono text-xs text-on-surface-variant tracking-[0.2em] uppercase">Selected Work</span>
          <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
        </div>

        {projects.length === 0 ? (
          <p className="text-on-surface-variant font-body text-sm">Projects coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface-container-low border border-outline-variant/10 p-8 hover:border-outline-variant/30 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center group-hover:bg-surface-container-high transition-colors">
            <span className="font-mono text-xs text-on-surface-variant">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-on-surface transition-colors p-2"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-on-surface transition-colors p-2"
                aria-label="View project"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-display text-xl text-on-surface mb-3 group-hover:text-surface-tint transition-colors">
          {project.title}
        </h3>
        <p className="font-body text-sm text-on-surface-variant/70 mb-6 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-widest px-3 py-1 border border-outline-variant/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}