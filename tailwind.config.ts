import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#2F4F3E',
          brown: '#5A3E2B',
          cream: '#F8F3EC',
        },
        accent: {
          clay: '#C97B5A',
          gold: '#D1A15E',
        },
        ink: '#3A3A3A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#3A3A3A',
            h1: {
              color: '#2F4F3E',
            },
            h2: {
              color: '#2F4F3E',
            },
            h3: {
              color: '#2F4F3E',
            },
            h4: {
              color: '#2F4F3E',
            },
            strong: {
              color: '#2F4F3E',
            },
            a: {
              color: '#C97B5A',
              '&:hover': {
                color: '#D1A15E',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
