/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#579660',
        'primary-light': '#EEF4EF',
        secondary: '#87563B',
        'secondary-light': '#F5DDD2',
      },
    },
  },
}
