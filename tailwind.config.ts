import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#bfaa8e",
          dark: "#2d2d2d",
          light: "#d4c4ad",
          accent: "#bfaa8e",
          gold: "#bfaa8e",
        },
        bgblue: "#f7f3ee",
      },
      fontFamily: {
        sans: ["Raleway", "Helvetica", "Arial", "sans-serif"],
        body: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
        display: ["Raleway", "Helvetica", "Arial", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
