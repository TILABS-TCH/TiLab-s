"use client";

import React from "react";
import { motion } from "framer-motion";
import { Workflow, ArrowRight } from "lucide-react";
import { processSteps } from "@/data/content";

const STAGE_THEMES = [
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

export function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-bg-main relative border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>05 // PROCESS &amp; WORKFLOW</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
            How I Approach Engineering
          </h2>
          <p className="text-text-muted max-w-2xl font-sans text-sm leading-relaxed">
            A disciplined four-phase methodology ensuring every line of code serves both user clarity and business outcomes.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const theme = STAGE_THEMES[idx % STAGE_THEMES.length];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`tactile-card rounded-2xl p-6 bg-white flex flex-col justify-between space-y-6 relative overflow-hidden ${theme.topBorder}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-3xl font-mono font-extrabold" style={{ color: theme.color }}>
                      {step.number}
                    </span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${theme.bg} ${theme.text} ${theme.border} border`}>
                      STAGE {step.number}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-text-main">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-text-dim">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-border space-y-2">
                  <span className="text-[10px] font-mono text-text-dim uppercase tracking-wider block">
                    DELIVERABLES:
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item) => (
                      <li key={item} className="text-xs font-mono text-text-main flex items-center gap-1.5">
                        <ArrowRight className="w-3 h-3 shrink-0" style={{ color: theme.color }} />
                        <span>{item}</span>
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
