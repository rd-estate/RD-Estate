/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32', // var(--primary)
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        secondary: {
          DEFAULT: '#263238', // var(--secondary)
        },
        accent: '#FFC107',
        light: '#F8F9FA',
        dark: '#212529',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/images/land-hero.webp')",
        'cta-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/images/land-cta.webp')",
      }
    },
  },
  plugins: [],
}