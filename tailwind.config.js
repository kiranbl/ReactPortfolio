/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        dark:"#1E212D",
        "light-cream":"#FAF3E0",
        cream:"#EABF9F",
        "dark-cream":"#B68973",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-coffee":
          "linear-gradient(90deg, rgba(182,137,115,1) 0%, rgba(234,191,159,1) 46%, rgba(250,243,224,1) 100%);",

        "gradient-darkcoffee":
          "linear-gradient(90deg, rgba(30,33,45,1) 0%, rgba(182,137,115,1) 46%, rgba(234,191,159,1) 100%);",
      }),
      fontFamily: {
        poppins: ["Poppins", "serif"]
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
  },
  },
  plugins: [],
}
