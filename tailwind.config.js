const { transform } = require("sucrase");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',      
    },
    extend: {
      colors: {
        primary: "#1d4ed8",
        dark: "#0f172a",
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
