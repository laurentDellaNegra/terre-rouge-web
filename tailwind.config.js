/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#579660',
        'primary-light': '#EEF4EF',
        secondary: '#87563B',
        'secondary-light': '#F5DDD2',
      },
    },
  },
  plugins: [],
}
