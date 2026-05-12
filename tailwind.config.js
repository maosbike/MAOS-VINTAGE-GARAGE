/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Cream / parchment surfaces
        paper: {
          DEFAULT: '#efe5c7', // main background — warm parchment
          light: '#f7efd5', // surface for cards
          dark: '#e3d7b1', // subtle contrast band
          deep: '#1a1410', // deep ink for inverted sections
        },
        // Ink / typography
        ink: {
          DEFAULT: '#1a1410', // near-black coffee
          soft: '#3a2f23', // softer body
          muted: '#6e5c40', // sepia for meta
          line: '#c9b88a', // tan rules / dividers
        },
        // Brand accents — vintage racing palette
        oxblood: {
          DEFAULT: '#6b1f1f', // primary CTA
          dark: '#4a1212',
          light: '#8a2a2a',
        },
        cognac: {
          DEFAULT: '#b25b1c', // works w/ existing logo orange
          dark: '#8a4314',
          light: '#d27a35',
        },
        brass: {
          DEFAULT: '#a47e3b', // metallic accent
          dark: '#7c5f2c',
          light: '#c89c52',
        },
        racing: {
          green: '#1f3a2a', // British racing green
          deep: '#13241a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        condensed: ['"Bebas Neue"', '"Oswald"', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.32em',
      },
      boxShadow: {
        paper: '0 8px 24px -16px rgba(26,20,16,0.35), 0 2px 4px -2px rgba(26,20,16,0.15)',
        plate: '0 1px 0 #c9b88a, 0 2px 0 #b3a071, 0 12px 30px -18px rgba(26,20,16,0.45)',
        inset: 'inset 0 2px 4px 0 rgba(26,20,16,0.08)',
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.10 0 0 0 0 0.07 0 0 0 0 0.05 0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        slide: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '32px 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'checker-slide': 'slide 1.4s linear infinite',
      },
    },
  },
  plugins: [],
};
