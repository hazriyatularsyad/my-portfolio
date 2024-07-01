/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212529",
        second: "#343a40",
        third: "#6c757d",
      },
    },
  },
  plugins: [],
}

