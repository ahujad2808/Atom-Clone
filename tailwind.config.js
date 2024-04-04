/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      display: ["Montserrat", 'sans-serif'],
      display2: ["Montserrat", 'Arial'],
      display3: ["Lato", 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'moonbg': "url('/src/assets/moon3.png')",
      }
    },
    
  },
  plugins: [],
}

