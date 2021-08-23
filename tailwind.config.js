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
      },
      width: {
        '48-custom': '48%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
