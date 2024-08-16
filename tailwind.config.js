/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        forestGreen: '#228B22',
        cream: '#F5F5DC',
        brown: '#8B4513',
        terracotta: '#E2725B',
      },
       backgroundImage: {
        'login-bg': "url('./src/assets/login.jpg')",
      },
    },
  },
  plugins: [],
}