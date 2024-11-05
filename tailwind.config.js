/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'custom-blue': '#172B4D',
      },
      backgroundColor: {
        'custom-blue': '#172B4D',
      }
    }
  },
  plugins: [],
}

