/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: 'rgb(var(--color-background))',
      surface: 'rgb(var(--color-surface))',
      primary: 'rgb(var(--color-primary))',
      text: 'rgb(var(--color-text))',
    },
  
    extend: {
      fontFamily: {
        'pixelify': 'pixelify sans'
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.2) 0px 4px 12px;'
      }
    },
  },
  plugins: [],
}