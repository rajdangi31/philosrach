import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "oklch(0.928 0.038 72)",
        "parchment-deep": "oklch(0.896 0.044 70)",
        ink: "oklch(0.22 0.025 50)",
        "ink-soft": "oklch(0.32 0.028 55)",
        "ink-muted": "oklch(0.48 0.034 58)",
        sepia: "oklch(0.55 0.10 65)",
        "sepia-soft": "oklch(0.65 0.07 70)",
        rule: "oklch(0.74 0.03 68)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-eb-garamond)", "Georgia", "serif"],
        caps: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
      maxWidth: {
        page: "1400px",
        prose: "68ch",
        sidebar: "280px",
      },
    },
  },
  plugins: [],
};

export default config;
