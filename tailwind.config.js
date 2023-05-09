/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#252525',
        secondary: '#fff',
        action: '#1E6F9F',
        modal: 'rgba(247, 245, 245, 0.1)'
      },
      fontFamily: {
        'roboto': ['Roboto', 'cursive'],
      }
    },
  },
  plugins: [],
}