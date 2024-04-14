/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        backdrop: "var(--backdrop-filter-color)",
      },
      boxShadow: {
        cardShadow: "var(--shadow-md)",
      },
    },
  },
  plugins: [],
};
