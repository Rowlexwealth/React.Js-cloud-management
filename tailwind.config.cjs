/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) {...}

      md: '768px',
      // => @media (min-width: 768px) {...}App

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },

    extend: {},
  },
  plugins: [],
}