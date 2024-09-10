/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorMenuPrimary: '#0C3EA6',
        colorMenuSecondary: '#051840',
      }
    },
  },
  plugins: [],
}

