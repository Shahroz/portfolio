"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { achievements, metrics, profile } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-heading">01 · About</p>
        <h2 className="section-title">Engineering leader. AI systems architect.</h2>

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="leading-relaxed text-slate-400">{profile.summary}</p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Not just a web developer — an AI systems architect who builds autonomous
              AI agents, visual drag-and-drop workflow builders, custom JSON schema
              engines, and enterprise SaaS platforms that real teams depend on daily.
            </p>

            <ul className="mt-8 space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 self-start lg:col-span-2">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <p className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text font-mono text-3xl font-bold text-transparent">
                  {m.value}
                </p>
                <p className="mt-1 text-xs text-slate-400">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
