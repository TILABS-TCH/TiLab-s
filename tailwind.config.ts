import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg-main)",
          subtle: "var(--bg-subtle)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
        },
        accent: {
          DEFAULT: "var(--accent-primary)",
          hover: "var(--accent-hover)",
          subtle: "var(--accent-subtle)",
          border: "var(--accent-border)",
        },
        border: {
          DEFAULT: "var(--border-subtle)",
          medium: "var(--border-medium)",
          active: "var(--border-active)",
        },
        text: {
          main: "var(--text-main)",
          muted: "var(--text-muted)",
          dim: "var(--text-dim)",
          subtle: "var(--text-subtle)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        subtle: "var(--shadow-subtle)",
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
      },
    },
  },
  plugins: [],
};

export default config;
