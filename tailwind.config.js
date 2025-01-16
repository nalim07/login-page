/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        'light-login': "url('/public/light-login.webp')",
        'dark-login': "url('/public/dark-login.avif')",
        'dark-ilustration': "url('/public/dark-ilustration.svg')"
      }
    },
  },
  plugins: [],
}

