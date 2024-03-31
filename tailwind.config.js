/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {

  content: [  './pages/**/*.{html,js}',
  './components/**/*.{html,js}'],
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
