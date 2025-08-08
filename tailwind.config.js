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
        // SAIGBOX brand colors matching the main app
        'saig-green': {
          50: '#f0f7f0',
          100: '#d9efd9',
          200: '#b3dfb3',
          300: '#8dce8d',
          400: '#7fc97f', // Primary color from main app
          500: '#6fb56f',
          600: '#5fa15f',
          700: '#4f8d4f',
          800: '#3f793f',
          900: '#2f652f',
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