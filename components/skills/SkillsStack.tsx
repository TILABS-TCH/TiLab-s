"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, CheckCircle2, Code2, Layers, Sparkles, Wrench } from "lucide-react";
import { skillCategories } from "@/data/content";

const CATEGORY_THEMES = [
  {
    icon: Code2,
    color: "#EA580C",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "text-orange-700 bg-orange-100",
    cardBorder: "border-t-4 border-t-orange-500",
  },
  {
    icon: Layers,
    color: "#7C3AED",
    bg: "bg-purple-50",
    border: "border-purple-200",
    badge: "text-purple-700 bg-purple-100",
    cardBorder: "border-t-4 border-t-purple-500",
  },
  {
    icon: Sparkles,
    color: "#E11D48",
    bg: "bg-rose-50",
    border: "border-rose-200",
    badge: "text-rose-700 bg-rose-100",
    cardBorder: "border-t-4 border-t-rose-500",
  },
  {
    icon: Wrench,
    color: "#059669",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "text-emerald-700 bg-emerald-100",
    cardBorder: "border-t-4 border-t-emerald-500",
  },
];

export function SkillsStack() {
  return (
    <section id="stack" className="py-28 bg-bg-main relative border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>03 // SKILLS &amp; TECH MATRIX</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
            Color-Coded Engineering Stack
          </h2>
          <p className="text-text-muted max-w-2xl font-sans text-sm leading-relaxed">
            Organized across four foundational disciplines: Core Web, Component Frameworks, Motion &amp; Styling, and Cloud Infrastructure.
          </p>
        </div>

        {/* Categories Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const theme = CATEGORY_THEMES[catIdx % CATEGORY_THEMES.length];
            const Icon = theme.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`tactile-card rounded-2xl p-8 bg-white space-y-6 ${theme.cardBorder}`}
              >
                <div className="border-b border-border pb-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
                      <Icon className="w-4 h-4" style={{ color: theme.color }} />
                      <span>{category.title}</span>
                    </h3>
                    <p className="text-xs text-text-muted font-sans">{category.description}</p>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md ${theme.badge}`}>
                    ACTIVE
                  </span>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-xl transition-all border ${
                        skill.highlight
                          ? `${theme.bg} ${theme.border} hover:border-current`
                          : "bg-bg-subtle/70 border-border hover:border-border-medium"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-xs text-text-main flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: theme.color }} />
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-text-dim px-2 py-0.5 rounded bg-white border border-border">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted font-sans leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
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
