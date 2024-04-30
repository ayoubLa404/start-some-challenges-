/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        white: 'var(--color-white)',
        dark: 'var(--color-dark)',
        grey: 'var(--color-grey)',
        black: 'var(--color-black)',
        fontSize: 'var(--fontSize)',
      },
    },
  },
  plugins: [],
};
