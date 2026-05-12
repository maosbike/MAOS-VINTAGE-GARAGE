/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coal: {
          DEFAULT: '#0e0d0b',
          raised: '#15140f',
          card: '#1c1a16',
          elevated: '#24211c',
          line: '#3b3631',
          dim: '#28251f',
        },
        ink: {
          DEFAULT: '#f4f0e6',
          soft: '#d4ccba',
          muted: '#9a8e7a',
          faint: '#6b6253',
        },
        cognac: {
          DEFAULT: '#c97f3a',
          dark: '#9d5e23',
          light: '#dfa365',
        },
        brass: {
          DEFAULT: '#d4a24c',
          dark: '#a47e3b',
          light: '#e6c177',
        },
        cream: {
          DEFAULT: '#ede0c0',
          dark: '#cdbf99',
        },
        signal: {
          red: '#c0392b',
          green: '#1f7a4f',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.32em',
        wider2: '0.18em',
      },
      boxShadow: {
        plate: '0 1px 0 rgba(212,162,76,0.10), 0 24px 60px -30px rgba(0,0,0,0.9)',
        glow: '0 0 60px -20px rgba(201,127,58,0.55)',
        inner: 'inset 0 0 0 1px rgba(212,162,76,0.10)',
      },
      backgroundImage: {
        'grad-coal':
          'radial-gradient(ellipse at top, rgba(201,127,58,0.10) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(212,162,76,0.06) 0%, transparent 60%)',
        'grad-vignette':
          'radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, rgba(14,13,11,0.65) 100%)',
        'grain-warm':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.88 0 0 0 0 0.78 0 0 0 0 0.55 0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-4px)' } },
        flag: { '0%': { backgroundPositionX: '0' }, '100%': { backgroundPositionX: '32px' } },
        flicker: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.85 } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        flag: 'flag 1.6s linear infinite',
        shimmer: 'shimmer 4s linear infinite',
      },
    },
  },
  plugins: [],
};
