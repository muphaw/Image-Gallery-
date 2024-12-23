/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#F44336",
        dark: "#212121",
        light: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        32: "8rem",
      },
    },
  },
  plugins: [],
}

