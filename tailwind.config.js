/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "200px",

      md: "768px",

      lg: "1220px",
    },
    extend: {
      backgroundImage: {
        mainmobile: "url('./public/home/background-home-mobile.jpg')",
        maintablet: "url('./public/home/background-home-tablet.jpg')",
        maindesktop: "url('./public/home/background-home-desktop.jpg')",
      },
      backdropBlur: {
        custom: "40.7742px",
      },
      backgroundColor: {
        divBack: "rgba(255, 255, 255, 0.04)",
      },
    },
  },
  plugins: [],
};
