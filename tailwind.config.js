/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // SAIGBOX brand colors based on the screenshot
        'saig-green': {
          50: '#e6f7e6',
          100: '#ccefcc',
          200: '#99df99',
          300: '#66cf66',
          400: '#33bf33',
          500: '#00af00', // Main brand green
          600: '#008c00',
          700: '#006900',
          800: '#004600',
          900: '#002300',
        },
        'saig-dark': {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d5d5d9',
          300: '#bcbcc2',
          400: '#8a8a94',
          500: '#585866',
          600: '#46465c',
          700: '#3a3a4d',
          800: '#2e2e3e', // Main background
          900: '#1a1a24', // Darker background
          950: '#0d0d12',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}