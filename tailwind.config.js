/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.css"],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('/public/light-login.webp')",
        'dark-login': "url('/public/dark-login.webp')",
        'dark-ilustration': "url('/public/dark-ilustration.svg')"
      }
    },
  },
  plugins: [],
}

