/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 50s infinite',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
      backgroundColor: ['active'],
      placeholderColor: ['focus'],
      borderColor: ['focus'],
      borderWidth: ['focus'],
    }
  },
  plugins: [],
}