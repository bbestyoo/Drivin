/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: "#0C2B4B"

      },
      backgroundImage:{

        bgimage:  "url('carousel-1.jpg')",
      }
    },
  },
  plugins: [],
}

