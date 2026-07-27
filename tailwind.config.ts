import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#060a14",
          900: "#0a0f1e",
          800: "#0f1629",
          700: "#151d33",
          600: "#1d2742",
        },
        neon: {
          cyan: "#22d3ee",
          indigo: "#818cf8",
          purple: "#c084fc",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        dash: "dash 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "-24" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
