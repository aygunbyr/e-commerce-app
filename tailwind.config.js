/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1240px',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      width: {
        96: '96%',
      },
    },
  },
  plugins: [],
};
