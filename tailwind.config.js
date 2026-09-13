/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FFFEFC',
          100: '#FAF8F4',
          200: '#F3EFE6',
          300: '#E7E1D4',
          400: '#D4CDBD',
        },
        ink: {
          900: '#111111',
          800: '#1C1C1E',
          700: '#2C2C2E',
          600: '#48484A',
          500: '#636366',
          400: '#8E8E93',
          300: '#C7C7CC',
          200: '#E5E5EA',
          100: '#F2F2F7',
        },
        journal: {
          red: '#B42318',
          darkRed: '#8A1C14',
          sand: '#E9E4D9',
          accent: '#A82D2D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        editorial: '-0.015em',
        caps: '0.14em',
        widecaps: '0.22em',
      },
      maxWidth: {
        editorial: '76rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        revealX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        fadeIn: 'fadeIn 0.7s ease both',
        revealX: 'revealX 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
