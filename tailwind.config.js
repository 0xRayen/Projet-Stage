const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        lightgrey: "#d9d9d9",
        darkgrey: "#7f7f7f",
        grey: "#b1b1b1",
        clicked: "#a5a5a5",
        noire: "#000000",
        primary: "#3B82F6",
        "primary-hover": "#2563EB",
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
