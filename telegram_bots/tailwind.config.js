/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    screens: {
      'sm': {'max':'640px'},
      'md': {'max':'925px'},
      'lg': {'max':'1024px'},
      'min-lg': {'min':'1024px'},
      'xl': {'min':'1280px'},
      '2xl': {'min':'1536px'},
    },
    extend: {
      padding: {
        '56':'clamp(26px,5vw,56px)'
      },
      colors: {
        "background": "#f2f2f2",
        "blue": "#4754EB",
        "main-white": "#FFFFFF",
        "main-gray": "#808080",
        "main-black": "#1A1A1A",
        "LTGrey": "#D9D9D9",
      }
    },
  },
  plugins: [],
}

