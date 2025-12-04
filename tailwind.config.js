/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "background-light": "#f3f4f6",
        "background-dark": "#0c0b10",
      },
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        sans: ["Sora", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
}
