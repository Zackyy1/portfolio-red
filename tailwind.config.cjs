/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx,astro}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#db1f1f",
        "primary-black": "#240000",
      },

      // breakpoints
      screens: {
        xs: "0px",
      }
    },
  },
  plugins: ["tailwindcss, autoprefixer"],
};
