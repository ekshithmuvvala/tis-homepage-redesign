import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        ink: '#142018',
        brand: {
          400: '#8fbd72',
          500: '#78a85d',
          600: '#5f8d47',
          700: '#4b7338',
        },
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
    },
  },

  plugins: [],
};

export default config;