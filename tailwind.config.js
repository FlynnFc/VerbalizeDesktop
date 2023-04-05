/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["border-green-500", "border-yellow-400", "border-base-300"],
  daisyui: {
    themes: ["business"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
