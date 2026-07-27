"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit, Cloud, Database, Layout, Server, Users,
  type LucideIcon,
} from "lucide-react";
import { techStack } from "@/data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Layout,
  Server,
  Database,
  Cloud,
  Users,
};

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-heading">04 · Tech Stack</p>
        <h2 className="section-title">Tools of the trade</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, i) => {
            const Icon = iconMap[category.icon] ?? Server;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="glass rounded-2xl p-6 transition-colors hover:border-neon-indigo/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 ring-1 ring-white/10">
                    <Icon className="h-4 w-4 text-neon-cyan" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:bg-white/[0.1] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
