import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#faf9f5",
        ink: "#17181a",
        muted: "#6b6f76",
        line: "#e3e1d8",
        accent: "#8b6b3d",
      },
    },
  },
  plugins: [],
};
export default config;
