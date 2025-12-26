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
        primary: '#10B981', // Emerald-500 (Primary emerald)
        'primary-dark': '#059669', // Emerald-600 (Darker for depth)
        secondary: '#F97316', // Orange-500 (Energy accent)
        accent: '#D4AF37', // Metallic gold
        surface: '#ffffff', // White for cards
        'surface-dark': '#1a1a1a', // Dark surface
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['Inter', 'SF Pro Display', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathing': 'breathing 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathing: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
