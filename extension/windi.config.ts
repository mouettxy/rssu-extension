import { resolve } from 'path'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  preflight: {
    includeGlobal: true,
  },
  attributify: true,
  important: true,
  theme: {
    extend: {
      zIndex: {
        10: 1000,
        20: 1020,
        30: 1030,
        40: 1040,
        50: 1050,
      },
      colors: {
        transparent: 'transparent',
        brand: {
          DEFAULT: '#0066CC',
          light: '#007FFF',
          dark: '#004C99',
        },
        accent: {
          DEFAULT: '#FF6600',
          light: '#FF8533',
          dark: '#CC5200',
        },
        gray: {
          lightest: '#f7f7f7',
          lighter: '#f2f2f2',
          light: '#dddddd',
          DEFAULT: '#c9c9c9',
          dark: '#898989',
          darker: '#636363',
          darkest: '#464646',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
    },
  },
  extract: {
    include: [
      resolve(__dirname, 'src/**/*.{vue,html,css}'),
    ],
  },
})
