/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF2F8',
          100: '#D5E0EF',
          200: '#AABEDD',
          300: '#7596C6',
          400: '#4A73AE',
          500: '#2B5EA7',
          600: '#1E4A8A',
          700: '#1B3A6B',
          800: '#132B52',
          900: '#0A1A33',
        },
        gold: {
          100: '#FDF3DC',
          200: '#FAE4A8',
          300: '#F5CC6B',
          400: '#F0B429',
          500: '#C8912A',
          600: '#A67020',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"DM Sans"',       'sans-serif'],
      },
    },
  },
  plugins: [],
}
