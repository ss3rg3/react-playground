/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      asdf: {
        "ant-blue": "#030852"
      },
      borderColor: {
        "ant-blue": "#030852"
      }
    },
  },
  plugins: [],
}

