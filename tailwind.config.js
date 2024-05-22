/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'webkit-fill': '-webkit-fill-available',
      },
      height:{
        'webkit-fill': '-webkit-fill-available'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

