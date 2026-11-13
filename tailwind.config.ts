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
        paper: "oklch(0.948 0.03 84 / <alpha-value>)",
        "paper-2": "oklch(0.918 0.038 82 / <alpha-value>)",
        ink: "oklch(0.2 0.018 50 / <alpha-value>)",
        "ink-2": "oklch(0.33 0.02 55 / <alpha-value>)",
        "ink-3": "oklch(0.5 0.02 60 / <alpha-value>)",
        rule: "oklch(0.82 0.035 78 / <alpha-value>)",
        rubric: "oklch(0.52 0.16 31 / <alpha-value>)",
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
