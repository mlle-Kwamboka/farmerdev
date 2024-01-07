/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Chivo", "sans-serif"],
    },
    extend: {
      colors: {
        "og-blue": "#4caf50",
        "light-dark": "#585858",
        "light-pink": "#F39F9F",
        "olive-green": "#749D1C",
        "dark-gray": "#333",
      },
    },
  },
  plugins: [],
};
