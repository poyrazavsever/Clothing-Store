/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '724px',
      lg:'1024px',
    },
    extend: {
      animation: {
        sliderAnimation: 'scroll 40s linear infinite',
        sliderStart: 'sliderStart .6s ease-in-out',
      },


      keyframes: {
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
  plugins: [],
};