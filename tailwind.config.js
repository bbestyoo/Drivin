/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{

        bgimage:  "url('carousel-1.jpg')",
      }
    },
  },
  plugins: [],
}

