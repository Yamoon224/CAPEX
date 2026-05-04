import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#008dd2",
          dark: "#0072a8",
          light: "#33a4dc",
          accent: "#008dd2",
          gold: "#d4a017",
        },
        bgblue: "#f2f9fd",
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
