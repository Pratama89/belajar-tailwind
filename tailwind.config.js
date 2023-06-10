const { transform } = require("sucrase");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
