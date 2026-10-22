import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#222120",
          light: "#2D2B29",
        },
        wood: {
          DEFAULT: "#4A2D1C",
          light: "#6E442B",
        },
        steel: {
          DEFAULT: "#7A8787",
          dark: "#566465",
        },
        marble: "#E8ECEB",
      },
    },
  },
  plugins: [],
};
export default config;

















