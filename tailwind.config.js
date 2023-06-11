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
        mainmobile: "url('/home/background-home-mobile.jpg')",
        maintablet: "url('/home/background-home-tablet.jpg')",
        maindesktop: "url('/home/background-home-desktop.jpg')",
        destmobile: "url('destination/background-destination-mobile.jpg')",
        desttablet: "url('destination/background-destination-tablet.jpg')",
        destdesktop: "url('destination/background-destination-desktop.jpg')",
      },
      backdropBlur: {
        custom: "40.7742px",
      },
      backgroundColor: {
        divBack: "rgba(255, 255, 255, 0.04)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".underline-hover-8px": {
          "&:hover:after": {
            content: "''",
            display: "block",
            width: "100%",
            height: "3px",
            background: "white",
            marginTop: "8px",
          },
        },
      });
    },
  ],
};
