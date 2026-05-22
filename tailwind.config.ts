import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        keval: {
          bg1: "#050816",
          bg2: "#0B1020",
          bg3: "#111827",
          accent1: "#8B5CF6",
          accent2: "#3B82F6",
          accent3: "#06B6D4"
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        geist: ['var(--font-geist-sans)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
