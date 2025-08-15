/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        xl: 'var(--radius)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        elevated: 'var(--shadow-elevated)',
      },
      colors: {
        app: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        apptext: 'rgb(var(--color-text) / <alpha-value>)',
        appmuted: 'rgb(var(--color-muted) / <alpha-value>)',
        appborder: 'rgb(var(--color-border) / <alpha-value>)',
        cyanglow: 'rgb(var(--accent-cyan) / <alpha-value>)',
        cyansoft: 'rgb(var(--accent-cyan-soft) / <alpha-value>)',
        deep: 'rgb(var(--accent-deep) / <alpha-value>)',
        warn: 'rgb(var(--accent-warn) / <alpha-value>)',
      },
      transitionTimingFunction: {
        premium: 'var(--ease-premium)',
      },
      transitionDuration: {
        fast: 'var(--dur-fast)',
        medium: 'var(--dur-medium)',
        slow: 'var(--dur-slow)',
      },
    },
  },
  plugins: [],
}
