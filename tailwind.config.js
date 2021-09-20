module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        blue700: "#010d56", //darkblue1
        blue600: "#000a66", //darkblue2
        //blue500: "#071987", //midblue1
        blue400: "#0011a6", //midblue2
        blue300: "#0014cc", //midblue3
        blue200: "#0016e6", //lightblue1
        blue100: "#0018f2", //lightblue2

        blue500: "#082996",

        almostWhite: "#f9f9f9",

        buttonColorDarkBG: "#d1593d",
        buttonColorBrightBG: "#b70202",
        buttonColorFull: "#b70202",
      },
      width: {
        '48-custom': '48%',
      },
      height: {
        '82': '22rem',
      },
      borderWidth: {
        '0.5': '0.5px',
        '1.5': '1.5px',
      },
      stroke: {
        buttonColorDarkBG: "#d1593d",
        buttonColorBrightBG: "#b70202",
        darkblue2: "#000a66",
      },

    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      width: ['group-hover', 'hover'],
      opacity: ['group-hover', 'hover'],
      display: ['group-hover', 'hover'],
      border: ['group-hover', 'hover'],
      borderWidth: ['group-hover', 'hover'],
    },
  },
  plugins: [
    require("tailwindcss-nested-groups"),
  ],
}
