/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Midabada Luxury-ga ah
        'luxury-gold': '#C5A059',
        'deep-black': '#121212',
        'soft-black': '#1a1a1a',
      },
      fontFamily: {
        // Font-ka "Luxury"
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}