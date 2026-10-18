"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers, Cpu, ArrowRight } from "lucide-react";
import { Project } from "@/data/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface ProjectDetailViewProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

export function ProjectDetailView({ project, prevProject, nextProject }: ProjectDetailViewProps) {
  return (
    <article className="min-h-screen pt-32 pb-24 bg-bg-main relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-text-muted hover:text-text-main mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-accent" />
            <span>Return to Selected Work</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 pb-12 border-b border-border"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-mono font-bold border shadow-subtle"
              style={{
                backgroundColor: project.lightColor || "#EFF6FF",
                color: project.color || "#0052FF",
                borderColor: `${project.color || "#0052FF"}30`,
              }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-text-dim">//</span>
            <span className="text-xs font-mono text-text-muted">{project.year}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-text-main tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-text-muted font-sans leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Key Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 font-mono text-xs border-t border-border">
            <div>
              <span className="text-text-dim block mb-1">ROLE:</span>
              <span className="text-text-main font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-text-dim block mb-1">RELEASE YEAR:</span>
              <span className="text-text-main font-semibold">{project.year}</span>
            </div>
            <div>
              <span className="text-text-dim block mb-1">CLASSIFICATION:</span>
              <span className="text-text-main font-semibold">{project.category}</span>
            </div>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="p-2 rounded-xl bg-white border border-border text-text-muted hover:text-text-main hover:border-text-main transition-colors shadow-subtle"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <MagneticButton strength={0.25}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-text-main text-white font-bold font-mono text-xs transition-transform shadow-subtle"
                  >
                    <span>Live Product</span>
                    <ExternalLink className="w-3.5 h-3.5 text-accent" />
                  </a>
                </MagneticButton>
              )}
            </div>
          </div>
        </motion.div>

        {/* Browser Chrome Feature Preview */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-12 tactile-card rounded-2xl overflow-hidden bg-white"
        >
          <div className="px-4 py-3 bg-bg-subtle border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="px-3 py-1 rounded-md bg-white border border-border text-xs font-mono text-text-dim">
              https://{project.slug}.tilabs.dev
            </div>
            <div className="w-8" />
          </div>

          <ImagePlaceholder
            src={project.image}
            alt={project.title}
            width={1200}
            height={750}
            aspectRatio="aspect-[16/9]"
            priority={true}
            className="rounded-none border-none"
          />
        </motion.div>

        {/* Project Content Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-6">
          {/* Tech Stack Column Left */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-border space-y-4 shadow-subtle">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent">
                <Cpu className="w-4 h-4" />
                <span>STACK ARCHITECTURE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium text-text-main bg-bg-subtle border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Narrative Column Right */}
          <div className="md:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                <span>Executive Overview</span>
              </h2>
              <p className="text-text-muted leading-relaxed font-sans text-sm">{project.overview}</p>
            </div>

            {/* Problem */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-text-main">The Challenge</h2>
              <p className="text-text-muted leading-relaxed font-sans text-sm">{project.problem}</p>
            </div>

            {/* Approach */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-text-main">The Engineering Approach</h2>
              <p className="text-text-muted leading-relaxed font-sans text-sm">{project.approach}</p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-text-main">Key Features &amp; Implementations</h2>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-border shadow-subtle">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs text-text-muted font-sans">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design & Engineering Decisions */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-text-main">Design &amp; Performance Decisions</h2>
              <ul className="space-y-2 list-disc list-inside text-xs text-text-muted leading-relaxed font-sans">
                {project.designDecisions.map((decision, idx) => (
                  <li key={idx}>{decision}</li>
                ))}
              </ul>
            </div>

            {/* Results / Outcomes */}
            <div
              className="p-6 rounded-2xl border space-y-3"
              style={{
                backgroundColor: project.lightColor || "#EFF6FF",
                borderColor: `${project.color || "#0052FF"}30`,
              }}
            >
              <h2
                className="text-xs font-bold font-mono uppercase tracking-wider"
                style={{ color: project.color || "#0052FF" }}
              >
                Results &amp; Impact
              </h2>
              <ul className="space-y-2 text-xs text-text-main font-mono">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: project.color || "#0052FF" }}
                    />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project Pagination */}
        <div className="mt-20 pt-8 border-t border-border flex items-center justify-between">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col gap-1 text-left"
            >
              <span className="text-xs font-mono text-text-dim flex items-center gap-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform text-accent" />
                Previous Case Study
              </span>
              <span className="text-base font-bold text-text-main group-hover:text-accent transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col gap-1 text-right"
            >
              <span className="text-xs font-mono text-text-dim flex items-center justify-end gap-1">
                Next Case Study
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-accent" />
              </span>
              <span className="text-base font-bold text-text-main group-hover:text-accent transition-colors">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
}
