"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
}

export function ImagePlaceholder({
  src,
  alt,
  width = 1200,
  height = 750,
  className = "",
  priority = false,
  aspectRatio = "aspect-[16/10]",
}: ImagePlaceholderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-bg-surface border border-border-subtle rounded-xl group",
        aspectRatio,
        className
      )}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-bg-subtle via-bg-surface to-bg-subtle" />
      )}

      {/* Fallback View if Image Fails */}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-bg-subtle">
          <div className="w-12 h-12 mb-3 rounded-full border border-border-subtle flex items-center justify-center text-accent">
            <span className="font-mono text-sm font-bold">TI</span>
          </div>
          <p className="text-sm font-mono text-text-muted">{alt}</p>
          <span className="mt-2 text-xs text-text-dim font-mono">
            {width} &times; {height} px
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}
