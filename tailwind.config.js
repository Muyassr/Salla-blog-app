/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "Media",
  theme: {
    extend: {},
    variants: {
      space: ["responsive", "direction"],
    },
    // colors: {
    //   'yellowOrange': '#FF9F4B',
    // },
  },
  plugins: [require("daisyui")],
  plugins: [require("tailwindcss-rtl")],
  darkMode: "class",
};
