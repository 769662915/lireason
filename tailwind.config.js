/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: '#F5F5F0', // Off-white background
          slate: '#2C3E50', // Deep Slate for text and accents
          sage: '#8F9779',  // Sage Green for nature-inspired elements
          tan: '#D2B48C',   // Tan for secondary accents
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1))",
      },
    },
  },
  plugins: [],
}
