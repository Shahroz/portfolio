"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { experiences } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export default function Experience() {
  // First two roles expanded by default; the rest collapsed.
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(experiences.slice(0, 2).map((e) => e.id))
  );

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <section id="experience" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="section-heading">03 · Experience</p>
        <h2 className="section-title">11+ years, {experiences.length} roles, one trajectory</h2>

        <div className="relative ml-3 border-l border-white/[0.08] pl-8">
          {experiences.map((exp, i) => {
            const isOpen = expanded.has(exp.id);
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
                className="relative pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <span
                  className={cn(
                    "absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border",
                    exp.current
                      ? "border-neon-cyan/60 bg-cyan-500/20 shadow-[0_0_16px_rgba(34,211,238,0.4)]"
                      : "border-white/10 bg-obsidian-800"
                  )}
                  aria-hidden
                >
                  <Briefcase className={cn("h-3 w-3", exp.current ? "text-neon-cyan" : "text-slate-500")} />
                </span>

                <button
                  onClick={() => toggle(exp.id)}
                  className="w-full text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-white">
                      {exp.role}
                      {exp.current && (
                        <span className="ml-2 rounded-full bg-emerald-500/15 px-2 py-0.5 align-middle text-[10px] font-medium text-emerald-300">
                          Current
                        </span>
                      )}
                    </h3>
                    <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-neon-indigo">
                    {exp.company} <span className="text-slate-500">· {exp.location}</span>
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs italic text-slate-500">
                    {exp.companyDescription}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 shrink-0 transition-transform", isOpen && "rotate-180")}
                    />
                  </p>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-2.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon-cyan" aria-hidden />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
