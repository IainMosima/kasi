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
        orange: '#EC910F',
        grey: '#5E5E5E',
        lightGrey: '#707070',
        lightWhite: '#FDFDFD'
      },
      fontFamily: {
        
      }
    },
  },
  plugins: [],
}
export default config
