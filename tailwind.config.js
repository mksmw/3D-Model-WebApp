/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth:{
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px"
    },
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      fontFamily:{
        bodyFont: ["Rubik", "sans-serif"],
        titleFont: ["Rubik Scribble", "sans-serif"]
      },
      boxShadow:{
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)"
      },
      colors:{
        bodyColor: "#000000", /** Black */
        textLight: "#FFC0CB", /** White */
        hoverColor: "rgba(100,255,218,0.1)"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

