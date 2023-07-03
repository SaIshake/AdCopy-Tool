/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/index.css", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        gajraj: ["Gajraj+One", "sans-serif"]
      }
    },
  },
  plugins: [],
}

