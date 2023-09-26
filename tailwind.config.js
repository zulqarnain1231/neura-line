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
          off: "#D9D9D9",
        },
        black: {
          main: "#000",
        },
      },
      fontFamily: {
        clash: ["Space", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        flowChart: "-38px 14px 150px -8px rgba(147,134,134,0.89)",
      },
    },
  },
  plugins: [],
};
