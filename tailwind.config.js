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
        // Fraunces carries the warmth — used large and sparingly.
        display: ['Fraunces', 'Georgia', 'serif'],
        // Karla is the humanist workhorse for everything readable.
        sans: ['Karla', 'Inter', 'Rubik', ...defaultTheme.fontFamily.sans],
        // Mono is reserved for elapsed time: it makes drift read as a record.
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        prose: '68ch',
      },
      colors: {
        // Night palette — intimacy, not corporate black.
        ink: '#17121F',
        dusk: '#241C33',
        veil: '#332845',
        // Warm near-white for the light half of the site.
        paper: '#FDFBF8',
        // Semantic pair: warmth means connection, cool grey means drift.
        ember: '#F2A65A',
        drift: '#8A8FA3',
        dark: '#060505',
        kindred: {
          DEFAULT: '#7868E6',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#7868E6',
          600: '#6d5bd0',
          700: '#5b47a8',
          800: '#4a3a87',
          900: '#3d306e',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

