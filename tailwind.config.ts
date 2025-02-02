import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f7ba34",
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "5rem",
          "2xl": "6rem"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
