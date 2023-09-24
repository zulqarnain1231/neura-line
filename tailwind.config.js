/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#FF3BFF ",
          secondary: "#5C24FF",
          tartary: "#D94FD5",
        },
        white: {
          main: "#fff",
        },
        black: {
          main: "#000",
        },
      },
      fontFamily: {
        clash: ["Space", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
