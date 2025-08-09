/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    
    extend: {
      fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans],
			}, 
      height: {
        'cover': '700px',
      },
      colors:{
        dark: '#060505',
        kindred: '#7868E6'
      }
    },
  },
  plugins: [],
}

