/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["border-green-500", "border-yellow-400", "border-base-300"],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#1EB854",
          secondary: "#1FD65F",
          accent: "#D99330",
          neutral: "#1B1D1D",
          "base-100": "#212121",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      "garden",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
