import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-bg-main relative">
      <div className="max-w-md mx-auto px-6 text-center space-y-6 tactile-card p-10 rounded-2xl bg-white">
        <div className="w-14 h-14 rounded-2xl bg-accent-subtle border border-accent-border mx-auto flex items-center justify-center text-accent">
          <Terminal className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-accent">404 // ROUTE NOT FOUND</span>
          <h1 className="text-3xl font-bold text-text-main">Signal Terminated</h1>
          <p className="text-xs text-text-muted font-sans leading-relaxed">
            The page or case study you requested could not be resolved by the router.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-text-main text-white font-mono font-semibold text-xs hover:bg-black transition-all shadow-subtle"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-accent" />
            <span>Return to TILABS Home</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-border text-[11px] font-mono text-text-dim">
          <span>{siteConfig.brandName} &bull; DIGITAL PRODUCTS &amp; EXPERIENCES</span>
        </div>
      </div>
    </div>
  );
}
