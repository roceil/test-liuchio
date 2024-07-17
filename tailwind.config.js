const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
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
        neutral: {
          900: '#111111',
          800: '#222222',
          700: '#333333',
          600: '#444444',
          500: '#555555',
          400: '#666666',
          300: '#777777',
          200: '#888888',
          100: '#999999',
          50: '#EEEEEE',
          0: '#FFFFFF',
        },
        primary: {
          950: '#242A47',
          900: '#344174',
          800: '#344174',
          700: '#485EB8',
          600: '#4F6CC1',
          500: '#6285CE',
          400: '#80A3DA',
          300: '#A9C2E7',
          200: '#CCDAF1',
          100: '#E0EFFF',
          50: '#EFF8FF',
        },
        danger: {
          200: '#D74F4F',
          100: '#FCE8DB',
        },
        success: {
          200: '#36A375',
          100: '#D9FADE',
        },
        warning: {
          200: '#F38B12',
          100: '#FEF1CF',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
      // Typography settings
      fontSize: {
        'h1': ['48px', { lineHeight: '48px', letterSpacing: '8px' }],
        'h2': ['30px', { lineHeight: '36px', letterSpacing: '8px' }],
        'h3': ['24px', { lineHeight: '32px', letterSpacing: '8px' }],
        'h4': ['20px', { lineHeight: '28px', letterSpacing: '8px' }],
        'h5': ['18px', { lineHeight: '28px', letterSpacing: '8px' }],
        'h6': ['16px', { lineHeight: '24px', letterSpacing: '8px' }],
        'text-1': ['16px', { lineHeight: '24px', letterSpacing: '5px' }],
        'text-2': ['14px', { lineHeight: '24px', letterSpacing: '5px' }],
        'text-3': ['12px', { lineHeight: '20px', letterSpacing: '5px' }],
      },
      fontWeight: {
        'regular': '400',
        'bold': '700',
      },
    },
  },
  plugins: [animate],
}