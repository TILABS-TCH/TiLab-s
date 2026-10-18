"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, Copy, Check, Clock, Globe, ArrowUpRight, Sparkles, Layers, Zap } from "lucide-react";
import { siteConfig } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [lagosTime, setLagosTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setLagosTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg-main bg-architectural-grid overflow-hidden border-b border-border">
      {/* Colorful Ambient Aura */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-accent/15 via-rose-300/20 to-amber-200/20 rounded-full blur-[100px] pointer-events-none -z-0 opacity-80" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-gradient-to-br from-purple-200/20 via-emerald-200/20 to-accent/10 rounded-full blur-[90px] pointer-events-none -z-0 opacity-70" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Status / Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 py-2.5 px-4 rounded-2xl bg-white/95 border border-border shadow-card mb-12 text-xs font-mono"
        >
          {/* Availability Beacon */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-semibold text-text-main">
              {siteConfig.status}
            </span>
          </div>

          {/* Telemetry info */}
          <div className="flex items-center gap-5 text-text-muted">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 font-semibold border border-purple-200">
              <Globe className="w-3.5 h-3.5" />
              <span>LAGOS (WAT)</span>
            </div>

            <div className="flex items-center gap-1.5 font-bold text-accent bg-accent-subtle px-2.5 py-1 rounded-md border border-accent-border">
              <Clock className="w-3.5 h-3.5" />
              <span>{lagosTime || "12:00:00"} WAT</span>
            </div>

            {/* Quick Copy Email Pill */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors text-amber-900 font-semibold"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-amber-700" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Main Editorial Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Title & Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider"
            >
              <span className="px-3 py-1 rounded-full bg-accent text-white shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{siteConfig.role}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                {siteConfig.brandName}
              </span>
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200 hidden sm:inline-block">
                Digital Experiences
              </span>
            </motion.div>

            {/* Massive Colorful Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-main leading-[1.06]"
            >
              Building interfaces that feel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-600 to-rose-500">
                crisp, vibrant,
              </span>{" "}
              and remarkably alive.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-text-muted max-w-2xl font-sans leading-relaxed"
            >
              I turn ideas into polished digital products. Specialized in engineering responsive web applications with high visual precision, fluid interaction physics, and expressive color architecture.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <MagneticButton strength={0.25}>
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent text-white font-mono font-bold text-xs hover:bg-accent-hover transition-all shadow-md hover:shadow-lg shadow-accent/25"
                >
                  <span>Explore Selected Work</span>
                  <ArrowDownRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <Link
                  href="#lab"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 font-mono font-semibold text-xs transition-all shadow-subtle"
                >
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Interactive Lab</span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Colorful Studio Spec Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4"
          >
            <div className="tactile-card rounded-2xl p-6 bg-white space-y-5 border-t-4 border-t-accent shadow-card">
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
                <span className="font-bold text-text-main flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>TILABS // COLOR SPEC</span>
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-text-dim">ENGINEER</span>
                  <span className="font-semibold text-text-main">Timi Ogunpitan</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-text-dim">PALETTE STACK</span>
                  <span className="font-bold text-accent">Electric Blue / Ultraviolet</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-text-dim">FRONTEND RUNTIME</span>
                  <span className="font-semibold text-purple-700">Next.js 15 + React 19</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-text-dim">MOTION ENGINE</span>
                  <span className="font-semibold text-rose-600">Framer Motion + Lenis</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-text-dim">SPECIALTY</span>
                  <span className="font-semibold text-emerald-700">Full Experience Design</span>
                </div>
              </div>

              {/* Colorful Palette Preview Strip */}
              <div className="pt-2 flex items-center justify-between border-t border-border">
                <span className="text-[10px] font-mono text-text-dim">ACCENT SPECTRUM:</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0052FF]" title="Royal Blue" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#7C3AED]" title="Ultraviolet" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#EA580C]" title="Coral" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#059669]" title="Emerald" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#E11D48]" title="Rose" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
