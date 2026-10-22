"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare, Github, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { siteConfig } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Freelance Web Project",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const projectTypes = [
    "Freelance Web Project",
    "Full-time Role",
    "UI/UX Design & Frontend",
    "Technical Consultation",
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please share a brief message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `New TILABS Inquiry: ${formData.projectType} from ${formData.name}`,
          projectType: formData.projectType,
          message: formData.message,
          from_name: "TILABS Portfolio Contact",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          projectType: "Freelance Web Project",
          message: "",
        });
      } else {
        setFormError(
          data.message ||
            "Unable to dispatch message via Web3Forms. Please use the direct email button."
        );
      }
    } catch {
      setFormError("Network error. Please try again or email directly via timi.tilabs@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Outreach & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>06 // INITIATE TRANSMISSION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight leading-tight">
                Have an idea worth building?
              </h2>
              <p className="text-base text-text-muted font-sans leading-relaxed">
                Let's turn it into something people remember. I'm currently open for freelance projects, technical contract roles, and select product design engineering opportunities.
              </p>
            </div>

            {/* Direct Email Card with One-click Copy */}
            <div className="tactile-card rounded-2xl p-6 bg-bg-subtle/50 space-y-4">
              <span className="text-xs font-mono text-text-dim block">DIRECT ELECTRONIC MAIL:</span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-base font-bold font-mono text-accent hover:underline truncate"
                >
                  {siteConfig.email}
                </a>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white border border-border text-xs font-mono font-medium hover:border-text-main transition-colors flex items-center gap-1.5 shrink-0 shadow-subtle"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-text-dim" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-text-muted font-sans">
                Typical reply turnaround time: within 24 hours.
              </p>
            </div>

            {/* Social Channels */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-text-dim block">FIND ME ONLINE:</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-border text-xs font-mono text-text-main hover:border-text-main transition-colors shadow-subtle"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-border text-xs font-mono text-text-main hover:border-text-main transition-colors shadow-subtle"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={siteConfig.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-border text-xs font-mono text-text-main hover:border-text-main transition-colors shadow-subtle"
                >
                  <Twitter className="w-4 h-4" />
                  <span>X (Twitter)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="tactile-card rounded-2xl p-8 md:p-10 bg-white">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-main">Message Delivered!</h3>
                  <p className="text-sm text-text-muted max-w-md font-sans">
                    Thank you for reaching out. Timi will review your inquiry and reply promptly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-bg-subtle border border-border text-xs font-mono text-text-main hover:border-text-main transition-colors"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono space-y-2">
                      <div className="flex items-center gap-2 font-bold">
                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Message not sent: {formError}</span>
                      </div>
                      <p className="font-sans text-rose-700">
                        You can also send your message directly via email to{" "}
                        <a href={`mailto:${siteConfig.email}`} className="font-bold underline">
                          {siteConfig.email}
                        </a>.
                      </p>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-text-muted flex items-center justify-between">
                      <span>YOUR NAME *</span>
                      {errors.name && (
                        <span className="text-xs text-red-600 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border text-text-main text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-text-muted flex items-center justify-between">
                      <span>YOUR EMAIL *</span>
                      {errors.email && (
                        <span className="text-xs text-red-600 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border text-text-main text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all font-sans"
                    />
                  </div>

                  {/* Project Type Select Pills */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-text-muted block">
                      PROJECT TYPE / NATURE OF WORK
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-mono text-left transition-all border ${
                            formData.projectType === type
                              ? "bg-accent text-white font-bold border-accent shadow-sm"
                              : "bg-bg-subtle border-border text-text-muted hover:border-text-dim"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-text-muted flex items-center justify-between">
                      <span>PROJECT DETAILS / MESSAGE *</span>
                      {errors.message && (
                        <span className="text-xs text-red-600 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </span>
                      )}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Share a brief overview of what you're building, target timeline, and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border text-text-main text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <MagneticButton strength={0.2} className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-accent text-white font-mono font-bold text-xs flex items-center justify-center gap-2 hover:bg-accent-hover transition-all disabled:opacity-50 shadow-md shadow-accent/25"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Message to Timi</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
