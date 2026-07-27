"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolioData";
import AgentCanvas from "./AgentCanvas";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-slate [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/[0.06] px-4 py-1.5 font-mono text-xs text-neon-cyan"
            >
              <MapPin className="h-3 w-3" /> {profile.location} · Available for remote work
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {profile.name.split(" ")[0]}{" "}
              <span className="glow-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {profile.name.split(" ")[1]}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl"
            >
              {profile.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 max-w-xl leading-relaxed text-slate-400"
            >
              {profile.tagline} {profile.yearsExperience}+ years shipping enterprise
              platforms and high-throughput web applications — from Rust backends to
              React frontends — with 3 years in AI, including 2 building agentic,
              multi-agent SaaS systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-neon-cyan/40"
                aria-label="Email Shahroz"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-neon-cyan/40"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass relative rounded-3xl p-6 sm:p-8"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">
              // live agent workflow
            </p>
            <AgentCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
