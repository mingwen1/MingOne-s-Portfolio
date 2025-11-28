/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        neon: '#CCFF00', // Fluorescent Yellow
        zinc: {
          950: '#050505', // Deep black
          900: '#101010',
          800: '#1a1a1a',
        }
      },
      fontSize: {
        'huge': '14vw',
      }
    },
  },
  plugins: [],
}