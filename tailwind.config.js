module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lighBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        btnGreen: "hsl(171, 52%, 58%)",
        btnPurple: "hsl(231, 98%, 76%)",
        footerColor: "hsl(220, 18%, 97%)",
      },
      fontFamily: {
        body: ["Bai Jamjuree"],
      },
      backgroundImage: {
        mobileBackground: "url('/images/bg-header-mobile.png')",
        desktopBackground: "url('/images/bg-header-desktop.png')",
      },
      boxShadow: {
        greenShadow:
          "0 20px 25px -5px rgba(200, 249, 239, 1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        purpleShadow:
          "0 20px 25px -5px rgba(229, 233, 255, 1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
