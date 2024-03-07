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
    screens: {
      'above-fold': '300px',
      // => @media (min-width: 300px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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