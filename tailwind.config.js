/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "974px",
      xl: "1440px",
    },
    colors: {
      primary: "#047267",
      secondary: "#272F30",
      gray: "#00235A8A",
      lightGray: "#00235A66",
      info: "#06AA9A",
      darkGray: "#595959",
      smoke: "#FEFEFE",
      white: "#FFFFFF",
      black: "#000",
      red: "#b91c1c;",
      danger: "#FF5E14",
      navy: "#00235A",
    },
    extend: {},
  },
  plugins: [],
};
