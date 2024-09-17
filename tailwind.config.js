/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          lime: 'hsla(61, 70%, 52%)',
          red: 'hsla(4, 69%, 50%)'
        },
        slate: {
          100: 'hsla(202, 86%, 94%)',
          300: 'hsla(203, 41%, 72%)',
          500: 'hsla(200, 26%, 54%)',
          700: 'hsla(200, 24%, 40%)',
          900: 'hsla(202, 55%, 16%)'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
