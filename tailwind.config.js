/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
  plugins: [],
}

