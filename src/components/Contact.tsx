"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Loader2, Mail, Phone, Send } from "lucide-react";
import { profile, siteConfig } from "@/data/portfolioData";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      data.append("access_key", siteConfig.web3formsAccessKey);
      data.append("subject", `Portfolio contact from ${data.get("name")}`);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-heading">05 · Contact</p>
        <h2 className="section-title">Let&apos;s build something intelligent</h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="max-w-md leading-relaxed text-slate-400">
              Whether you need an AI-powered SaaS platform architected from zero, a
              multi-agent workflow system, or an engineering team led to delivery —
              I&apos;m open to discussing it.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-neon-cyan/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15">
                  <Mail className="h-4 w-4 text-neon-cyan" aria-hidden />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-medium text-white">{profile.email}</p>
                </div>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-neon-indigo/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15">
                  <Linkedin className="h-4 w-4 text-neon-indigo" aria-hidden />
                </span>
                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="text-sm font-medium text-white">/in/shahroz-allauddin</p>
                </div>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-neon-cyan/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500/15">
                  <Github className="h-4 w-4 text-slate-300" aria-hidden />
                </span>
                <div>
                  <p className="text-xs text-slate-500">GitHub</p>
                  <p className="text-sm font-medium text-white">
                    {profile.github.replace("https://", "")}
                  </p>
                </div>
              </a>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-neon-purple/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                  <Phone className="h-4 w-4 text-neon-purple" aria-hidden />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="text-sm font-medium text-white">{profile.phone}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-slate-400">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-neon-cyan/50"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-slate-400">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-neon-cyan/50"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-neon-cyan/50"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-90 disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="text-sm text-emerald-400" role="status">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-rose-400" role="alert">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
