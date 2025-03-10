import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        custom: ["nunito sans", "sans-serif"],
      },
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueDarkMode: "hsl(207, 26%, 17%)",
        veryDarkBlueLight: "hsl(200, 15%, 8%)",
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
