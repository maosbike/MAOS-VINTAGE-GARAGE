/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          card: '#161616',
          border: '#2a2a2a',
        },
        text: {
          DEFAULT: '#ffffff',
          muted: '#a3a3a3',
        },
        brand: {
          orange: '#F28100',
          gray: '#545454',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(242,129,0,0.45)',
      },
    },
  },
  plugins: [],
};
