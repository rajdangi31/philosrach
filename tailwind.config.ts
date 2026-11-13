import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "oklch(var(--paper) / <alpha-value>)",
        "paper-2": "oklch(var(--paper-2) / <alpha-value>)",
        ink: "oklch(var(--ink) / <alpha-value>)",
        "ink-2": "oklch(var(--ink-2) / <alpha-value>)",
        "ink-3": "oklch(var(--ink-3) / <alpha-value>)",
        rule: "oklch(var(--rule) / <alpha-value>)",
        rubric: "oklch(var(--rubric) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-eb-garamond)", "Georgia", "serif"],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        full: "9999px",
      },
      maxWidth: {
        page: "78rem",
        measure: "40rem",
      },
    },
  },
  plugins: [],
};

export default config;
