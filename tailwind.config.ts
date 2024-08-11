import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'primary-dark': '#f3f4f6',
        'secondary-dark': '#e5e7eb',
        'primary-light': '#1f2937',
        'secondary-light': '#374151',
        'primary-gradient': '#b3ffab',
        'secondary-gradient': '#12fff7',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        wave: {
          '0%': {
            transform: 'rotate(0.0deg)',
          },
          '10%': {
            transform: 'rotate(14deg)',
          },
          '20%': {
            transform: 'rotate(-8deg)',
          },
          '30%': {
            transform: 'rotate(14deg)',
          },
          '40%': {
            transform: 'rotate(-4deg)',
          },
          '50%': {
            transform: 'rotate(10.0deg)',
          },
          '60%': {
            transform: 'rotate(0.0deg)',
          },
          '100%': {
            transform: 'rotate(0.0deg)',
          },
        },
        flying: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(0.8rem)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        badge: {
          '100%': {
            transform: 'scaleY(1.7) scaleX(1.25)',
            opacity: '0',
          },
        },
        slide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '20%': {
            transform: 'translateX(-100%)',
          },
          '50%': {
            transform: 'translateX(-100%)',
          },
          '90%': {
            transform: 'translateX(5%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideInfinite: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-300%)',
          },
        },
        rainArrow: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '40%': {
            transform: 'translateY(-20%)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'waving-hand': 'wave 2s linear infinite',
        'flying-card': 'flying 3s infinite normal',
        'badge-pulse': 'badge 1.5s ease-out infinite',
        'slide-card': 'slide 3s 1s ease-in-out',
        'slide-infinite': 'slideInfinite 100s linear infinite',
        'rain-arrow': 'rainArrow 1s ease-out infinite',
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(to right, #b3ffab, #12fff7);',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
