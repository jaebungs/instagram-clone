const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
     
      extend: {
        colors: {
          lightBlue: colors.lightBlue,
        },
        width: {
          '480p': '480px',
          '815p': '815px',
        },
        height: {
          '600p': '600px'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }