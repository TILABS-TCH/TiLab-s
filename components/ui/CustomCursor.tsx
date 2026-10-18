"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const cursorX = useSpring(0, { stiffness: 450, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 28 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const card = target.closest("[data-cursor='view']");
      const cursorCustomText = target.closest("[data-cursor-text]");

      if (cursorCustomText) {
        setCursorText(cursorCustomText.getAttribute("data-cursor-text") || "");
        setIsHovered(true);
      } else if (card) {
        setCursorText("View");
        setIsHovered(true);
      } else if (interactive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || shouldReduceMotion || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? (cursorText ? 76 : 38) : 12,
        height: isHovered ? (cursorText ? 76 : 38) : 12,
        backgroundColor: isHovered
          ? cursorText
            ? "#09090b"
            : "rgba(0, 82, 255, 0.12)"
          : "#09090b",
        border: isHovered
          ? cursorText
            ? "none"
            : "1.5px solid #0052ff"
          : "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="text-[11px] font-semibold uppercase tracking-wider text-white font-mono"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
