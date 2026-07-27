"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projectCategories, projects, type ProjectCategory } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-heading">02 · Projects</p>
        <h2 className="section-title">Selected work</h2>

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 font-mono text-xs transition-all",
                filter === cat
                  ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-neon-cyan ring-1 ring-neon-cyan/40"
                  : "glass text-slate-400 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                className="glass group flex flex-col rounded-2xl p-6 transition-colors hover:border-neon-cyan/30"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/15 px-2 py-0.5 text-[10px] font-medium text-purple-300">
                      <Sparkles className="h-3 w-3" /> Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-neon-cyan">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon-indigo" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
