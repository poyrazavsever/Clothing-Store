/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    screens: {
      sm: '480px',
      md: '748px',
      lg:'924px',
    },
    extend: {
      animation: {
        sliderAnimation: 'scroll 60s linear infinite',
        sliderStart: 'sliderStart .2s ease-in-out',
        cardimg : ' card_img .5s forwards',
      },

      grayscale: {
        50:"100%",
      },
      
      keyframes: {
        cardimg: {
          '0%' : { height: '0%',},
          '100%' : { height : '100%'},
        },
        scroll: {
          '0%' : {transform: 'translateX(0)' },
          '100%': {transform : 'translateX(-3500px)'}
        },
        sliderStart: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};