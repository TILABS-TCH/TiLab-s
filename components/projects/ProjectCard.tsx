"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Layers, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "architecture">("preview");

  const signatureColor = project.color || "#0052FF";
  const signatureBg = project.lightColor || "#EFF6FF";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="tactile-card rounded-2xl overflow-hidden flex flex-col h-full bg-white group hover:border-transparent transition-all duration-300"
      style={{
        boxShadow: "0 2px 8px -2px rgba(12, 13, 18, 0.06), 0 1px 4px -1px rgba(12, 13, 18, 0.03)",
      }}
      data-cursor="view"
    >
      {/* Browser Chrome Window Header with Signature Accent Bar */}
      <div
        className="px-4 py-3 border-b flex items-center justify-between"
        style={{
          backgroundColor: signatureBg,
          borderColor: `${signatureColor}20`,
        }}
      >
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: signatureColor }} />
        </div>

        {/* Address Bar */}
        <div className="px-3 py-1 rounded-md bg-white border border-border text-[11px] font-mono text-text-dim flex items-center gap-1.5 max-w-[200px] truncate shadow-subtle">
          <span style={{ color: signatureColor }}>🔒</span>
          <span>{project.slug}.tilabs.dev</span>
        </div>

        {/* Card View Switcher Tabs */}
        <div className="flex items-center gap-1 font-mono text-[10px]">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === "preview"
                ? "text-white font-bold"
                : "text-text-dim hover:text-text-main"
            }`}
            style={{
              backgroundColor: activeTab === "preview" ? signatureColor : "transparent",
            }}
          >
            UI
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === "architecture"
                ? "text-white font-bold"
                : "text-text-dim hover:text-text-main"
            }`}
            style={{
              backgroundColor: activeTab === "architecture" ? signatureColor : "transparent",
            }}
          >
            Arch
          </button>
        </div>
      </div>

      {/* Main View Area */}
      {activeTab === "preview" ? (
        <Link href={`/projects/${project.slug}`} className="block relative overflow-hidden bg-bg-subtle">
          <ImagePlaceholder
            src={project.image}
            alt={project.title}
            width={1200}
            height={750}
            aspectRatio="aspect-[16/10]"
            className="rounded-none border-none group-hover:scale-[1.03] transition-transform duration-500"
          />

          <div className="absolute top-3 left-3">
            <span
              className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-subtle border"
              style={{
                backgroundColor: signatureBg,
                color: signatureColor,
                borderColor: `${signatureColor}30`,
              }}
            >
              {project.category}
            </span>
          </div>
        </Link>
      ) : (
        <div
          className="p-6 min-h-[220px] flex flex-col justify-between border-b space-y-4 font-sans"
          style={{
            backgroundColor: signatureBg,
            borderColor: `${signatureColor}20`,
          }}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold" style={{ color: signatureColor }}>
              <Layers className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURE &amp; APPROACH</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed line-clamp-4">
              {project.approach}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-text-dim uppercase tracking-wider block">KEY FEATURE:</span>
            <div className="text-xs font-semibold text-text-main flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: signatureColor }} />
              <span className="truncate">{project.features[0]}</span>
            </div>
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold px-2 py-0.5 rounded" style={{ color: signatureColor, backgroundColor: signatureBg }}>
              {project.year}
            </span>
            <span className="text-text-dim font-medium">{project.role}</span>
          </div>

          <Link href={`/projects/${project.slug}`} className="group/title inline-block">
            <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover/title:text-accent transition-colors flex items-center gap-2">
              <span>{project.title}</span>
              <ArrowUpRight
                className="w-4 h-4 opacity-0 -translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all"
                style={{ color: signatureColor }}
              />
            </h3>
          </Link>

          <p className="text-sm text-text-muted line-clamp-2 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills & Direct Links */}
        <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium text-text-muted bg-bg-subtle border border-border"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-text-dim bg-bg-subtle">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-main hover:bg-bg-subtle transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="p-1.5 rounded-lg transition-colors"
                style={{
                  color: signatureColor,
                  backgroundColor: signatureBg,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
