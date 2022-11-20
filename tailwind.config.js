/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ringColor: {
        DEFAULT: '#579660',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
      },
      colors: {
        primary: '#579660',
        'primary-dark': '#4d8455',
        'primary-light': '#60a56a',
        'primary-extra-light': '#EEF4EF',
        secondary: '#87563B',
        'secondary-light': '#F5DDD2',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
      },
    },
  },
}
