/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"Media",
  theme: {
    extend: {},
    variants: {
      space: ['responsive','direction']
    }
  },
  plugins: [require("daisyui")],
  plugins: [require("tailwindcss-rtl")],
}
