module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        darkblue1: "#010d56",
        darkblue2: "#000a66",
        midblue1: "#071987",
        midblue2: "#0011a6",
        midblue3: "#0014cc",
        lightblue1: "#0016e6",
        lightblue2: "#0018f2",

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
