/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px', // Add a custom breakpoint for screens larger than 1536px
      },
    },
  },
  plugins: [],
}