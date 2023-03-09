/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   colors:{
   background:"#09203c",
   bgbutton: "#6367ED",
   card:"#1f3950",
   fontprimary:"#ebfcff",
   fontsecondary:"#b8c1d5",
   },
   fontFamily:{
     "sans": ["Roboto"],
   },
  },
  plugins: [],
}