import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A0F1C",
          900: "#0E1523",
          850: "#101726",
          800: "#131C2D",
          750: "#162235",
        },
        cyanAccent: {
          300: "#67E8F9",
          400: "#22D3EE",
          600: "#0891B2",
        },
        gold: {
          100: "#F4E7C1",
          300: "#D4AF37",
          400: "#C89B2B",
          600: "#8F6A14",
        },
        ink: {
          50: "#EAF0F6",
          200: "#B7C2D0",
          400: "#7E8A9A",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          soft: "rgba(255,255,255,0.05)",
        },
        background: "var(--background)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)",
      },
      boxShadow: {
        glow: "0 16px 40px rgba(27, 197, 255, 0.12)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(17, 24, 39, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 24, 39, 0.18) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
