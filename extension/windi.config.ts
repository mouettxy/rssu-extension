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
    zIndex: {
      10: 1000,
      20: 1020,
      30: 1030,
      40: 1040,
      50: 1050,
    },
    colors: {
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
    },
  },
  extract: {
    include: [
      resolve(__dirname, 'src/**/*.{vue,html,css}'),
    ],
  },
})
