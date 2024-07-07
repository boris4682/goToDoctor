/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#16D0CA',
        secondary: '#E5F2FC'
      }
    },
  },
  plugins: [],
}

