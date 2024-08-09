/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customNeutralGray: "#323232",
        customMediumGray: "#767676",
        customDarkGray: "#333",
        customMediumGreen: "#04DDB2",
      },
      fontFamily: {
        lab: [
          "LabGrotesque",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
