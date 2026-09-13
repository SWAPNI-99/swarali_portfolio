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
          50: 'rgb(var(--paper-50) / <alpha-value>)',
          100: 'rgb(var(--paper-100) / <alpha-value>)',
          200: 'rgb(var(--paper-200) / <alpha-value>)',
          300: 'rgb(var(--paper-300) / <alpha-value>)',
          400: 'rgb(var(--paper-400) / <alpha-value>)',
        },
          ink: {
            900: 'rgb(var(--ink-900) / <alpha-value>)',
            800: 'rgb(var(--ink-800) / <alpha-value>)',
            700: 'rgb(var(--ink-700) / <alpha-value>)',
            600: 'rgb(var(--ink-600) / <alpha-value>)',
            500: 'rgb(var(--ink-500) / <alpha-value>)',
            400: 'rgb(var(--ink-400) / <alpha-value>)',
            300: 'rgb(var(--ink-300) / <alpha-value>)',
            200: 'rgb(var(--ink-200) / <alpha-value>)',
            100: 'rgb(var(--ink-100) / <alpha-value>)',
          },
  journal: {
    red: 'rgb(var(--journal-red) / <alpha-value>)',
    darkRed: 'rgb(var(--journal-dark-red) / <alpha-value>)',
    sand: 'rgb(var(--journal-sand) / <alpha-value>)',
    accent: 'rgb(var(--journal-accent) / <alpha-value>)',
  },
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
