"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Palette } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";

const THEME_COLORS = [
  { id: "blue", label: "Royal Blue", bg: "bg-[#0052FF]", border: "border-[#0052FF]" },
  { id: "coral", label: "Sunset Coral", bg: "bg-[#EA580C]", border: "border-[#EA580C]" },
  { id: "purple", label: "Ultraviolet", bg: "bg-[#7C3AED]", border: "border-[#7C3AED]" },
  { id: "emerald", label: "Mint Emerald", bg: "bg-[#059669]", border: "border-[#059669]" },
  { id: "rose", label: "Radiant Rose", bg: "bg-[#E11D48]", border: "border-[#E11D48]" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("blue");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeTheme = (themeId: string) => {
    setActiveTheme(themeId);
    if (themeId === "blue") {
      document.documentElement.removeAttribute("data-accent");
    } else {
      document.documentElement.setAttribute("data-accent", themeId);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-border shadow-subtle"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-text-main flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-mono font-bold text-xs tracking-tight text-white group-hover:text-accent transition-colors">
                TI
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-wider text-text-main flex items-center gap-1.5">
                <span>{siteConfig.brandName}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-text-dim tracking-tight hidden sm:block">
                digital products &amp; systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/95 px-3 py-1.5 rounded-full border border-border shadow-subtle">
            {navLinks.map((link) => (
              <MagneticButton key={link.name} strength={0.2}>
                <Link
                  href={link.href}
                  className="px-3.5 py-1 text-xs font-mono font-medium text-text-muted hover:text-text-main transition-colors rounded-full hover:bg-bg-subtle"
                >
                  {link.name}
                </Link>
              </MagneticButton>
            ))}
          </nav>

          {/* Color Switcher & Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Live Color Studio Switcher */}
            <div className="flex items-center gap-1.5 p-1 px-2 rounded-full bg-white border border-border shadow-subtle">
              <Palette className="w-3.5 h-3.5 text-text-dim mr-0.5" />
              {THEME_COLORS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => changeTheme(c.id)}
                  title={`Switch to ${c.label}`}
                  className={`w-3.5 h-3.5 rounded-full ${c.bg} transition-transform ${
                    activeTheme === c.id ? "scale-125 ring-2 ring-offset-1 ring-black" : "hover:scale-110 opacity-80"
                  }`}
                />
              ))}
            </div>

            <MagneticButton strength={0.25}>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-white bg-accent hover:bg-accent-hover px-4 py-2 rounded-xl transition-all shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl bg-white border border-border text-text-main shadow-subtle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white md:hidden flex flex-col justify-between p-8 pt-28 border-b border-border"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="text-xs font-mono uppercase tracking-widest text-text-dim">
                  THEME COLOR
                </span>
                <div className="flex items-center gap-2">
                  {THEME_COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => changeTheme(c.id)}
                      className={`w-5 h-5 rounded-full ${c.bg} ${
                        activeTheme === c.id ? "ring-2 ring-offset-2 ring-black" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-text-main hover:text-accent transition-colors flex items-center justify-between py-2 border-b border-border/60"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-text-dim" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>{siteConfig.status}</span>
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl bg-accent text-white font-mono font-bold text-xs shadow-md"
              >
                Let's Discuss a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
