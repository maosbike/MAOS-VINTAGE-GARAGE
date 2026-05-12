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
          cream: '#f5efe0',
        },
        text: {
          DEFAULT: '#ffffff',
          muted: '#a3a3a3',
        },
        brand: {
          orange: '#F28100',
          orangeDark: '#c66800',
          gray: '#545454',
          cream: '#f5efe0',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        display: '0.02em',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(242,129,0,0.45)',
        card: '0 10px 30px -15px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        checker:
          'linear-gradient(45deg, #fff 25%, transparent 25%), linear-gradient(-45deg, #fff 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #fff 75%), linear-gradient(-45deg, transparent 75%, #fff 75%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        slide: {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '32px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'checker-slide': 'slide 1.2s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
