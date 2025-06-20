/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        // gold: '#C9A655',
        // cream: '#F1EBE2',
        // rose: '#E6C9C3',
        // beige: '#D0BFAA',
        // steel: '#A69EA6',
        // plum: '#3E2F39',
        // slate: '#787178',
        // navy: '#172434',
      },
      fontFamily: {
        // 'fancy': ['"Baroque Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
