/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00e5a0',
          hover: '#33f0b3',
          dark: '#00c98a',
          muted: '#00b8d9',
        },
      },
    },
  },
  plugins: [],
}

