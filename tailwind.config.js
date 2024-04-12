/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-grey-500)",
        secondary: "#ecc94b",
        tertiary: "",
      },
    },
  },
  plugins: [],
};
