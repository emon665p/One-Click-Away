import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f8d7da',
        rose: '#c97c7c',
        cocoa: '#2f1f1d',
        pearl: '#fffafc',
        mauve: '#e8c6cf',
        ink: '#1f1b1d',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 80px rgba(201,124,124,0.25)',
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)',
        luxe: '0 24px 80px rgba(201, 124, 124, 0.16)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(255,255,255,0.16), transparent 55%)',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-poppins)', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3.2s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
} satisfies Config;
