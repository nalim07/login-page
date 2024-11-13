/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.css"],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('/public/bg-login.png')",
        'dark-login': "url('/public/dark-login.png')",
        'dark-ilustration': "url('/public/dark-ilustration.svg')"
      }
    },
  },
  plugins: [],
}

