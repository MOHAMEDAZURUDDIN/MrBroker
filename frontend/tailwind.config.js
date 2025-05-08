/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        teal: {
          DEFAULT: "#008080",
          400: "#008080",
        },
      },
    },
    screens: {
      xsm: "375px",
      sm: "550px",
      md: "767px",
      lg: "991px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
