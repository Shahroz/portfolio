"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, BrainCircuit, CheckCircle2, Cloud, Compass, Layout, Rocket, Users,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Rocket,
  Compass,
  Cloud,
  Layout,
  Users,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-heading">05 · Services</p>
        <h2 className="section-title">Work with me</h2>

        <p className="mb-12 max-w-2xl leading-relaxed text-slate-400">
          Available for freelance projects, consulting engagements, and fractional
          leadership — remote, for clients anywhere in the world.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Rocket;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="glass flex flex-col rounded-2xl p-6 transition-colors hover:border-neon-cyan/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 ring-1 ring-white/10">
                    <Icon className="h-4 w-4 text-neon-cyan" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{service.title}</h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-auto space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neon-cyan/70" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-90"
          >
            Have a project in mind? Let&apos;s talk <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
