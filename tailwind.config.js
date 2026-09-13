/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#03050d',
          900: '#070b18',
          800: '#0c1124',
          700: '#121733',
          600: '#1a2046',
        },
        neon: {
          blue: '#00d4ff',
          cyan: '#22e3ff',
          teal: '#2dffd6',
          purple: '#a855f7',
          violet: '#7c3aed',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '50px 50px',
      },
    },
  },
  plugins: [],
};
