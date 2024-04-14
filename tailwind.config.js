/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        primary2: "var(--primary-color2)",
        secondary: "var(--secondary-color)",
        secondary2: "var(--secondary-color2)",
        tertiary: "var(--tertiary-color)",
      },
      boxShadow: {
        cardShadow: "var(--shadow-md)",
      },
    },
  },
  plugins: [],
};
