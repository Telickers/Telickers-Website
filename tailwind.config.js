/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "390px" },
      },
      colors: {
        brand: "#FAFBFC",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};