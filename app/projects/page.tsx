import React from "react";
import Link from "next/link";
import { ArrowLeft, FolderGit2 } from "lucide-react";
import { projects, siteConfig } from "@/data/content";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects & Selected Work",
  description: `Case studies, web applications, and digital products engineered by ${siteConfig.fullName}.`,
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-text-muted hover:text-text-main mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-accent" />
          <span>Return to Homepage</span>
        </Link>

        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-16 pb-8 border-b border-border">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FULL ARCHIVE // ALL CASE STUDIES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-main tracking-tight">
            Selected Digital Products
          </h1>
          <p className="text-text-muted max-w-2xl font-sans text-sm leading-relaxed">
            A comprehensive catalog of web applications, developer tooling, and user interfaces engineered with modern frontend standards and clean TypeScript architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
