import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // * COLORS
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'base-light': 'var(--light)',
      },
      backgroundColor: {
        light: 'var(--background)',
        dark: 'var(--secondary)',
      },
      textColor: {
        dark: 'var(--primary)',
        light: 'var(--light)',
      },
      // * FONTS
      fontFamily: {
        nantes: ['var(--font-nantes)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        redhat: ['var(--font-redhat)', 'Arial', 'sans-serif'],
      },
      fontSize: {
        title: [
          '3.5rem', // 56px
          {
            lineHeight: '4.2rem', //68px
          },
        ],
        'sub-title': [
          '1.625rem', // 25px
          {
            lineHeight: '2.188rem', //35px
          },
        ],
        body: [
          '1rem', // 16px
          {
            lineHeight: '1.375rem', //22px
          },
        ],
        small: [
          '0.875rem', //14px
          {
            lineHeight: '1.125rem', // 18px
          },
        ],
      },
      // * OTHER
      screens: {
        '3xl': '2000px',
      },
      transitionTimingFunction: {
        'out-quad': 'cubic-bezier(0.5, 1, 0.89, 1)',
      },
    },
  },
  plugins: [],
}
export default config
