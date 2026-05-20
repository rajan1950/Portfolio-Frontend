/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette from CSS variables
        primary: {
          dark: '#101017',
          accent: '#ffbd13',
        },
        secondary: {
          orange: '#7a3c1d',
        },
        neutral: {
          light: '#f8f7f5',
          muted: '#d7d3cc',
          card: 'rgba(255, 255, 255, 0.07)',
          'card-strong': 'rgba(255, 255, 255, 0.12)',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '54px'],
      },
      spacing: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 189, 19, 0.2)',
        'glow-lg': '0 0 40px rgba(255, 189, 19, 0.3)',
        'glow-sm': '0 0 10px rgba(255, 189, 19, 0.15)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 12px 48px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glowPulse: {
          '0%, 100%': {
            opacity: '0.6',
            boxShadow: '0 0 20px rgba(255, 189, 19, 0.2)',
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 40px rgba(255, 189, 19, 0.4)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      transitionDuration: {
        '350': '350ms',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
