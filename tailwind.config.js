/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 다크 테마 색상
        'primary': '#1a1a1a',
        'secondary': '#2d2d2d',
        'accent': '#3b3b3b',
        'text': '#ffffff',
        'text-secondary': '#a0a0a0',
      },
    },
  },
  plugins: [],
} 