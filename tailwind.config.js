/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["winter"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
