/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '96%',
        xl: '1240px',
      },
    },
    fontFamily: {
      'dm-sans': ['DM Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
