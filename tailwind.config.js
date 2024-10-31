/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { // Use extend to add new colors without overwriting defaults
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        gold: {
          100: '#d4af37',
          200: '#bf9e32',
          300: '#aa8c2c',
          400: '#947a27',
          500: '#7f6921',
          600: '#6a581c',
          700: '#554616',
          800: '#403511',
          900: '#2a230b',
        },
      },
    },
  },
  plugins: [],
}
