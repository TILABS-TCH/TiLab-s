"use client";

import React, { useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Sliders, Sparkles, RefreshCw, CheckCircle2, Terminal, Palette, Sun, Moon } from "lucide-react";

const PALETTES = [
  { id: "blue", name: "Royal Electric", hex: "#0052FF", light: "#EFF6FF", border: "#BFDBFE" },
  { id: "coral", name: "Sunset Coral", hex: "#EA580C", light: "#FFF7ED", border: "#FED7AA" },
  { id: "purple", name: "Ultraviolet", hex: "#7C3AED", light: "#F5F3FF", border: "#DDD6FE" },
  { id: "emerald", name: "Cyber Mint", hex: "#059669", light: "#ECFDF5", border: "#A7F3D0" },
  { id: "rose", name: "Radiant Ruby", hex: "#E11D48", light: "#FFF1F2", border: "#FECDD3" },
];

export function InteractiveLab() {
  // Spring Physics State
  const [stiffness, setStiffness] = useState(320);
  const [damping, setDamping] = useState(22);
  const [activeTab, setActiveTab] = useState<"physics" | "tokens" | "haptics">("physics");
  const [toggleState, setToggleState] = useState(true);
  const [impulseKey, setImpulseKey] = useState(0);
  const [selectedColor, setSelectedColor] = useState(PALETTES[0]);

  // Drag coordinates for physics box
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness, damping });
  const springY = useSpring(dragY, { stiffness, damping });

  const triggerImpulse = () => {
    setImpulseKey((prev) => prev + 1);
  };

  const handlePaletteSelect = (pal: typeof PALETTES[0]) => {
    setSelectedColor(pal);
    if (pal.id === "blue") {
      document.documentElement.removeAttribute("data-accent");
    } else {
      document.documentElement.setAttribute("data-accent", pal.id);
    }
  };

  return (
    <section id="lab" className="py-24 bg-bg-subtle/70 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              <span>TILABS LAB // INTERACTIVE CHROMATIC PLAYGROUND</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight">
              Interactive Component Sandbox
            </h2>
            <p className="text-text-muted max-w-xl text-sm leading-relaxed">
              Test live spring physics, switch palette hues across the site, and observe micro-interaction states in real time.
            </p>
          </div>

          {/* Segmented Control */}
          <div className="flex items-center p-1 bg-white border border-border rounded-xl shadow-subtle">
            <button
              onClick={() => setActiveTab("physics")}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "physics"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              Spring Physics
            </button>
            <button
              onClick={() => setActiveTab("tokens")}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "tokens"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              Live Palettes
            </button>
            <button
              onClick={() => setActiveTab("haptics")}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "haptics"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              Micro-Controls
            </button>
          </div>
        </div>

        {/* Sandbox Stage */}
        <div className="tactile-card rounded-2xl overflow-hidden p-6 md:p-10 bg-white">
          {activeTab === "physics" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Interactive Canvas Area */}
              <div
                className="lg:col-span-7 border rounded-2xl p-8 flex flex-col items-center justify-center min-h-[350px] relative overflow-hidden transition-colors"
                style={{
                  backgroundColor: selectedColor.light,
                  borderColor: selectedColor.border,
                }}
              >
                <div className="absolute top-4 left-4 font-mono text-[11px] text-text-dim flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: selectedColor.hex }} />
                  <span className="font-semibold text-text-main">ACTIVE CHROMATIC ENTITY</span>
                </div>

                <div className="absolute top-4 right-4 font-mono text-[11px] text-text-dim">
                  DRAG &amp; RELEASE ENTITY
                </div>

                {/* Draggable entity with dynamic spring and selected color */}
                <motion.div
                  key={impulseKey}
                  drag
                  dragConstraints={{ left: -140, right: 140, top: -80, bottom: 80 }}
                  dragElastic={0.25}
                  whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                  animate={{
                    rotate: [0, -12, 12, -6, 6, 0],
                    scale: [1, 1.18, 0.95, 1],
                  }}
                  transition={{
                    type: "spring",
                    stiffness,
                    damping,
                  }}
                  className="w-32 h-32 rounded-3xl text-white cursor-grab shadow-2xl flex flex-col items-center justify-center select-none active:cursor-grabbing border-2 border-white/20 group relative overflow-hidden"
                  style={{
                    backgroundColor: selectedColor.hex,
                    boxShadow: `0 20px 35px -10px ${selectedColor.hex}50`,
                  }}
                >
                  <Sparkles className="w-7 h-7 text-white mb-1 group-hover:rotate-45 transition-transform duration-300" />
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase">DRAG ME</span>
                  <span className="text-[9px] font-mono text-white/80">{selectedColor.name}</span>
                </motion.div>

                {/* Color quick-switch bar right under the canvas */}
                <div className="mt-6 flex items-center gap-2 bg-white/90 p-1.5 rounded-full border border-border shadow-subtle z-10">
                  <span className="text-[10px] font-mono text-text-dim px-2">HUE:</span>
                  {PALETTES.map((pal) => (
                    <button
                      key={pal.id}
                      onClick={() => handlePaletteSelect(pal)}
                      className={`w-6 h-6 rounded-full transition-transform ${
                        selectedColor.id === pal.id ? "scale-125 ring-2 ring-black ring-offset-1" : "hover:scale-110 opacity-70"
                      }`}
                      style={{ backgroundColor: pal.hex }}
                      title={pal.name}
                    />
                  ))}
                </div>
              </div>

              {/* Controls Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-text-main">Dynamic Motion &amp; Spring Physics</h3>
                  <p className="text-xs text-text-muted mt-1">
                    Fine-tune physics values and pick color variants that reflect throughout the app.
                  </p>
                </div>

                {/* Tension / Stiffness Slider */}
                <div className="space-y-2 p-4 rounded-xl bg-bg-subtle border border-border">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-text-muted font-medium">STIFFNESS / TENSION</span>
                    <span className="font-bold text-text-main" style={{ color: selectedColor.hex }}>{stiffness}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="800"
                    step="10"
                    value={stiffness}
                    onChange={(e) => setStiffness(Number(e.target.value))}
                    className="w-full h-1.5 bg-border rounded-lg cursor-pointer"
                    style={{ accentColor: selectedColor.hex }}
                  />
                  <div className="flex justify-between text-[10px] text-text-dim font-mono">
                    <span>Soft &amp; Elastic (50)</span>
                    <span>Rigid &amp; Snappy (800)</span>
                  </div>
                </div>

                {/* Damping / Friction Slider */}
                <div className="space-y-2 p-4 rounded-xl bg-bg-subtle border border-border">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-text-muted font-medium">DAMPING / FRICTION</span>
                    <span className="font-bold text-text-main" style={{ color: selectedColor.hex }}>{damping}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="1"
                    value={damping}
                    onChange={(e) => setDamping(Number(e.target.value))}
                    className="w-full h-1.5 bg-border rounded-lg cursor-pointer"
                    style={{ accentColor: selectedColor.hex }}
                  />
                  <div className="flex justify-between text-[10px] text-text-dim font-mono">
                    <span>Under-damped Bouncy (5)</span>
                    <span>Critically Damped Smooth (60)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={triggerImpulse}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-mono text-xs font-bold transition-all shadow-md"
                    style={{
                      backgroundColor: selectedColor.hex,
                      boxShadow: `0 10px 20px -5px ${selectedColor.hex}40`,
                    }}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Fire Motion Pulse</span>
                  </button>
                  <button
                    onClick={() => {
                      setStiffness(320);
                      setDamping(22);
                    }}
                    className="px-3.5 py-3 rounded-xl bg-white border border-border text-xs font-mono text-text-muted hover:text-text-main transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tokens" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-bold text-text-main">Live Architectural Color Palettes</h3>
                <p className="text-xs text-text-muted mt-1">
                  Click any palette below to instantly bathe the entire portfolio in that signature hue.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {PALETTES.map((pal) => (
                  <button
                    key={pal.id}
                    onClick={() => handlePaletteSelect(pal)}
                    className={`p-5 rounded-2xl text-left border transition-all ${
                      selectedColor.id === pal.id
                        ? "ring-2 ring-black shadow-lg scale-105"
                        : "hover:scale-102 hover:shadow-card bg-white"
                    }`}
                    style={{
                      backgroundColor: pal.light,
                      borderColor: pal.border,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl mb-4 shadow-sm flex items-center justify-center text-white font-mono font-bold text-xs" style={{ backgroundColor: pal.hex }}>
                      ✓
                    </div>
                    <h4 className="text-sm font-bold text-text-main">{pal.name}</h4>
                    <p className="text-xs font-mono font-semibold mt-1" style={{ color: pal.hex }}>
                      {pal.hex}
                    </p>
                    <span className="mt-3 block text-[10px] font-mono text-text-dim">
                      {selectedColor.id === pal.id ? "ACTIVE THEME" : "CLICK TO APPLY"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "haptics" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Micro-switch 1 */}
              <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-200 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-mono text-orange-700 font-bold block mb-1">CONTROL 01</span>
                  <h4 className="text-sm font-bold text-text-main">Elastic Spring Switch</h4>
                  <p className="text-xs text-text-muted mt-1 font-sans">
                    Fluid thumb translation with elastic over-drag physics.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-orange-200">
                  <span className="text-xs font-mono text-orange-950 font-bold">
                    {toggleState ? "ACTIVE // ON" : "INACTIVE // OFF"}
                  </span>
                  <button
                    onClick={() => setToggleState(!toggleState)}
                    className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 relative focus:outline-none ${
                      toggleState ? "bg-orange-600" : "bg-zinc-300"
                    }`}
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="w-6 h-6 rounded-full bg-white shadow-md"
                      style={{
                        marginLeft: toggleState ? "auto" : "0",
                      }}
                    />
                  </button>
                </div>
              </div>

              {/* Micro-switch 2 */}
              <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-200 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-mono text-purple-700 font-bold block mb-1">CONTROL 02</span>
                  <h4 className="text-sm font-bold text-text-main">Multi-Hue Rail</h4>
                  <p className="text-xs text-text-muted mt-1 font-sans">
                    Shared motion pill transitions between states.
                  </p>
                </div>

                <div className="p-1.5 bg-white border border-purple-200 rounded-xl flex items-center justify-between text-xs font-mono">
                  {["Swift", "Dynamic", "Strict"].map((val, i) => (
                    <span
                      key={val}
                      className={`px-3 py-1.5 rounded-lg text-center cursor-pointer transition-colors ${
                        i === 1 ? "bg-purple-600 text-white font-bold" : "text-text-muted"
                      }`}
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>

              {/* Micro-switch 3 */}
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-mono text-emerald-700 font-bold block mb-1">CONTROL 03</span>
                  <h4 className="text-sm font-bold text-text-main">Reactive Logger</h4>
                  <p className="text-xs text-text-muted mt-1 font-sans">
                    Real-time telemetry and state commit streams.
                  </p>
                </div>

                <div className="font-mono text-[11px] p-3 rounded-xl bg-zinc-900 text-zinc-100 space-y-1">
                  <div className="text-emerald-400">✓ EVENT_DISPATCH: 200 OK</div>
                  <div className="text-amber-400">FPS: 60.0 (STEADY)</div>
                  <div className="text-sky-400">COLOR_BUS: SYNCHRONIZED</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
