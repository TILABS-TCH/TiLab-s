"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FolderGit2, ArrowRight } from "lucide-react";
import { projects } from "@/data/content";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function SelectedWork() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Web Application", "Developer Tool", "E-Commerce", "Design Tool"];

  const filteredProjects =
    filter === "All"
      ? projects.slice(0, 6)
      : projects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="work" className="py-28 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>02 // SELECTED WORK</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight">
              Featured Case Studies &amp; Systems
            </h2>
            <p className="text-text-muted max-w-xl text-sm leading-relaxed">
              Every project is built with strict attention to performance, maintainable TypeScript architecture, and tactile interactions.
            </p>
          </div>

          <MagneticButton strength={0.25}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-text-main px-4 py-2.5 rounded-xl border border-border bg-white hover:border-text-main transition-colors shadow-subtle"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent" />
            </Link>
          </MagneticButton>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border">
          <span className="text-xs font-mono text-text-dim mr-2 hidden sm:inline">FILTER:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filter === cat
                  ? "bg-text-main text-white font-bold shadow-sm"
                  : "bg-white border border-border text-text-muted hover:text-text-main"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
