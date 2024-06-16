import defaultTheme from '/fonts/FixelDisplay-Regular.otf'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        fixel: ['FixelDisplay', 'sans-serif'],
      },
        colors: {
        blue: '#273979',
        grey: '#f3f5f8',
      },
    },
  },
  plugins: [],
}

