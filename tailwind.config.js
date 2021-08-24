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

        buttonColor: "#d1593d",
      },
      width: {
        '48-custom': '48%',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      stroke: {
        buttonColor: "#d1593d",
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
