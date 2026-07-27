"use client";

import { motion } from "framer-motion";
import { Bot, Database, Globe, MessageSquare, Sparkles, Workflow } from "lucide-react";

// A lightweight, dependency-free "AI agent pipeline" visual:
// glowing nodes connected by animated dashed edges (mimics React Flow).
const nodes = [
  { id: "trigger", label: "Lead Trigger", sub: "webhook · MLS", icon: Globe, x: 0, y: 18, accent: "cyan" },
  { id: "agent", label: "AI Agent", sub: "Claude · Gemini", icon: Bot, x: 34, y: 0, accent: "indigo" },
  { id: "workflow", label: "GenNodes Flow", sub: "JSON schema", icon: Workflow, x: 34, y: 52, accent: "purple" },
  { id: "enrich", label: "Enrichment", sub: "250+ integrations", icon: Database, x: 68, y: 18, accent: "indigo" },
  { id: "output", label: "Outreach", sub: "email · WhatsApp", icon: MessageSquare, x: 100, y: 30, accent: "cyan" },
] as const;

const edges = [
  { from: { x: 12, y: 26 }, to: { x: 34, y: 12 } },
  { from: { x: 12, y: 30 }, to: { x: 34, y: 58 } },
  { from: { x: 48, y: 12 }, to: { x: 68, y: 24 } },
  { from: { x: 48, y: 58 }, to: { x: 68, y: 30 } },
  { from: { x: 82, y: 27 }, to: { x: 100, y: 36 } },
];

const accents: Record<string, string> = {
  cyan: "border-cyan-400/40 text-cyan-300 shadow-cyan-500/20",
  indigo: "border-indigo-400/40 text-indigo-300 shadow-indigo-500/20",
  purple: "border-purple-400/40 text-purple-300 shadow-purple-500/20",
};

export default function AgentCanvas() {
  return (
    <div className="relative h-[340px] w-full select-none sm:h-[380px]" aria-hidden>
      {/* Edges */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 70" preserveAspectRatio="none">
        <defs>
          <linearGradient id="edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {edges.map((e, i) => {
          const mx = (e.from.x + e.to.x) / 2;
          return (
            <motion.path
              key={i}
              d={`M ${e.from.x} ${e.from.y} C ${mx} ${e.from.y}, ${mx} ${e.to.y}, ${e.to.x} ${e.to.y}`}
              fill="none"
              stroke="url(#edge)"
              strokeWidth="0.35"
              strokeDasharray="1.6 1.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 + i * 0.15 }}
              className="animate-dash"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${(node.y / 70) * 100}%`,
              transform: node.x === 100 ? "translateX(-100%)" : undefined,
            }}
          >
            <div
              className={`glass flex items-center gap-2.5 rounded-xl border px-3 py-2 shadow-lg ${accents[node.accent]}`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-white">{node.label}</p>
                <p className="font-mono text-[10px] text-slate-400">{node.sub}</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Status chip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="glass absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="font-mono text-[11px] text-slate-300">
          agent_pipeline · running
        </span>
        <Sparkles className="h-3 w-3 text-neon-cyan" />
      </motion.div>
    </div>
  );
}
