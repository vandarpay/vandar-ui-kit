/** @type {import('tailwindcss').Config} */
const {
  colors
} = require('./designTokens/colors.cjs');
const {
  fontSize
} = require('./designTokens/fontSize.cjs');
const {
  spacing
} = require('./designTokens/spacing.cjs');
const {
  screens
} = require('./designTokens/screens.cjs');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors,
    fontSize,
    spacing,
    screens,
    fontFamily: {
      'yekan-bakh': ['yekan-bakh'],
      'yekan-faNum-bold': ['yekan-faNum-bold'],
      'yekan-faNum-regular': ['yekan-faNum-regular'],
    }
  },
};