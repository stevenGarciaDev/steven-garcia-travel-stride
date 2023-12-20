/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#5200d4",
        "purple-background": "#f9f4fe"
      }
    },
  },
  plugins: [],
}