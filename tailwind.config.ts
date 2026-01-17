import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.08)",
      },
      colors: {
        paper: {
          DEFAULT: "#0B0C10",
          ink: "#EDEDED",
          dim: "rgba(237,237,237,0.72)",
          faint: "rgba(237,237,237,0.16)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
