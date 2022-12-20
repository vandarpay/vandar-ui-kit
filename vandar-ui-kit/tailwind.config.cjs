/** @type {import('tailwindcss').Config} */
const { colors } = require('./src/designTokens/colors.cjs');
const { fontSize } = require('./src/designTokens/fontSize.cjs');
const { spacing } = require('./src/designTokens/spacing.cjs');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors,
    fontSize,
    spacing
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
