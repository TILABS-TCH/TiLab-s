"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Zap, ShieldCheck, FileCode2, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function About() {
  const principles = [
    {
      icon: Zap,
      title: "Performance by Default",
      description: "Sub-100ms interactions, zero cumulative layout shift (CLS), and aggressive asset optimization. Fast software is polite software.",
      color: "#EA580C",
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
    {
      icon: ShieldCheck,
      title: "Accessible Architecture",
      description: "Semantic HTML landmarks, full keyboard navigability, and WCAG AA contrast compliance built in from line one.",
      color: "#059669",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      icon: FileCode2,
      title: "Deterministic Type Safety",
      description: "Strict TypeScript interfaces and typed component props prevent runtime regressions and make refactoring painless.",
      color: "#7C3AED",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      icon: Sparkles,
      title: "Purposeful Motion",
      description: "Animations serve as spatial orientation and tactile feedback, respecting prefers-reduced-motion across every screen.",
      color: "#E11D48",
      bg: "bg-rose-50",
      border: "border-rose-200",
    },
  ];

  return (
    <section id="about" className="py-28 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>01 // ABOUT TIMI &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
            Crafting software with intention &amp; curiosity.
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="tactile-card rounded-2xl overflow-hidden p-3 bg-bg-subtle border-t-4 border-t-accent shadow-card">
              <ImagePlaceholder
                src="/images/profile/avatar.svg"
                alt="Timi - Ogunpitan Oluwatimileyin Samuel"
                width={600}
                height={600}
                aspectRatio="aspect-square"
                className="rounded-xl border border-border"
              />

              <div className="p-4 bg-white rounded-xl mt-3 border border-border flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-text-main">{siteConfig.fullName}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-dim mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>Lagos, Nigeria • Remote</span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-accent-subtle text-accent border border-accent-border font-mono text-[11px] font-bold">
                  TILABS
                </span>
              </div>
            </div>

            {/* Quick Fact Pill */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <p className="text-xs font-mono text-emerald-950 font-medium">
                Available for freelance contracts, frontend engineering, and design system work.
              </p>
            </div>
          </motion.div>

          {/* Narrative & Principles Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4 text-text-muted font-sans text-base leading-relaxed">
              {siteConfig.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 4 Core Principles */}
            <div className="pt-4 border-t border-border">
              <span className="text-xs font-mono text-text-dim uppercase tracking-wider block mb-4">
                ENGINEERING STANDARDS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {principles.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`p-5 rounded-2xl border transition-all ${item.bg} ${item.border} hover:shadow-card`}
                    >
                      <div
                        className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center mb-3 shadow-subtle"
                        style={{ color: item.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-text-main mb-1">{item.title}</h4>
                      <p className="text-xs text-text-muted leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
