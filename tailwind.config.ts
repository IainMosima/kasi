import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#27A949',
        darkGreen: '#3B7A4C',
        orange: '#EC910F',
        darkOrange: '#CF7C06',
        grey: '#5E5E5E',
        lightGrey: '#707070',
        lightWhite: '#FDFDFD'
      },
      fontFamily: {
        base: ['PT Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
