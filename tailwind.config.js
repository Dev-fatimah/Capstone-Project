/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html","./*.js"],
    theme: {
    extend: {
        screens: {
        xs: "470px", // 👈 Your custom screen size
        },
    },
  },
  plugins: [],
}