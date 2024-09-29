import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#272727",
        white: "#FAFFFD",
        // white: "#F7F4F0",
        orange: "#C7571F",
        unselect: "#d6d6d6",
      },
      fontFamily: {
        default: ["Libre Baskerville", "serif"],
      }
    },
  },
  plugins: [],
};
export default config;
