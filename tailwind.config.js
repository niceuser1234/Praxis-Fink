/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        // Warm-neutral scale; intentionally replaces Tailwind's cool slate site-wide.
        slate: {
          50:  '#FAF8F4',
          100: '#F3EFE8',
          200: '#E6E1D8',
          300: '#D2CCC1',
          400: '#9E988D',
          500: '#676259',
          600: '#4F4A43',
          700: '#3A3631',
          800: '#26231F',
          900: '#181613',
        },
        sand: '#F4EFE6',
        brand: {
          DEFAULT: '#0F6B63',
          50:  '#EEF6F3',
          100: '#D8ECE6',
          200: '#B4DACF',
          300: '#86C2B2',
          700: '#0B544D',
          800: '#0A4540',
          900: '#083733',
        },
      },
      fontSize: {
        display: ['clamp(2.75rem, 5vw, 4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        h2: ['clamp(2rem, 3.4vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        site: '80rem',
      },
    },
  },
  plugins: [],
}
