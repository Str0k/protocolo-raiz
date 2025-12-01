/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // Slate-50 (Light background)
        text: '#0f172a', // Slate-900 (Dark text)
        primary: '#059669', // Emerald-600 (Darker emerald for contrast)
        secondary: '#d97706', // Amber-600 (Darker amber for contrast)
        accent: '#7c3aed', // Violet-600
        surface: '#ffffff', // White for cards
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
