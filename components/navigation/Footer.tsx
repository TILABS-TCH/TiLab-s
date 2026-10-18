"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-bg-subtle border-t border-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-text-main flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-white">TI</span>
              </div>
              <span className="font-bold text-base text-text-main tracking-wider">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-xs text-text-muted max-w-sm font-sans leading-relaxed">
              {siteConfig.brandTagline} Dedicated to engineering crisp, resilient digital products for startups and forward-thinking businesses.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{siteConfig.status}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-text-dim">
              SITEMAP
            </span>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-mono text-text-muted hover:text-text-main transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-text-dim">
              COMMUNICATIONS
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white border border-border text-text-muted hover:text-text-main hover:border-text-main transition-all shadow-subtle"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white border border-border text-text-muted hover:text-text-main hover:border-text-main transition-all shadow-subtle"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="p-2.5 rounded-xl bg-white border border-border text-text-muted hover:text-text-main hover:border-text-main transition-all shadow-subtle"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email Contact"
                className="p-2.5 rounded-xl bg-white border border-border text-text-muted hover:text-accent hover:border-accent transition-all shadow-subtle"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-mono text-text-dim mt-2">{siteConfig.email}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-text-dim text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.fullName} ({siteConfig.brandName}). Engineered with Next.js &amp; TypeScript.
          </p>

          <MagneticButton strength={0.25}>
            <button
              onClick={scrollToTop}
              aria-label="Return to top"
              className="flex items-center gap-2 text-xs font-mono font-medium text-text-main p-2 px-3 rounded-xl bg-white border border-border hover:border-text-main transition-all shadow-subtle"
            >
              <span>Return to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
