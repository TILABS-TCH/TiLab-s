"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitCommit, CheckCircle2 } from "lucide-react";
import { journeyMilestones } from "@/data/content";

const PHASE_THEMES = [
  {
    color: "#EA580C",
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-700",
    topBorder: "border-t-4 border-t-orange-500",
  },
  {
    color: "#7C3AED",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-700",
    topBorder: "border-t-4 border-t-purple-500",
  },
  {
    color: "#0052FF",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    topBorder: "border-t-4 border-t-blue-500",
  },
  {
    color: "#059669",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-700",
    topBorder: "border-t-4 border-t-emerald-500",
  },
];

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-28 bg-white relative border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
            <GitCommit className="w-3.5 h-3.5" />
            <span>04 // THE JOURNEY &amp; EVOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
            Progression &amp; Craft Evolution
          </h2>
          <p className="text-text-muted max-w-2xl font-sans text-sm leading-relaxed">
            A clear timeline of my continuous growth from building foundational static layouts to architecting full-scale, type-safe Next.js web applications.
          </p>
        </div>

        {/* Architectural Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeyMilestones.map((milestone, idx) => {
            const theme = PHASE_THEMES[idx % PHASE_THEMES.length];

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`tactile-card rounded-2xl p-6 bg-white flex flex-col justify-between space-y-6 ${theme.topBorder}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-xs font-mono font-bold uppercase" style={{ color: theme.color }}>
                      {milestone.year}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold ${theme.bg} ${theme.text} ${theme.border} border`}>
                      {milestone.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-text-main leading-snug">
                      {milestone.title}
                    </h3>
                    <p className="text-xs font-mono text-text-dim">
                      {milestone.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    {milestone.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-border space-y-2">
                  <span className="text-[10px] font-mono text-text-dim uppercase tracking-wider block">
                    FOCUS POINTS:
                  </span>
                  <ul className="space-y-1.5">
                    {milestone.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-mono text-text-main">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: theme.color }} />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
