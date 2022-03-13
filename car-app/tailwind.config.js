module.exports = {
  purge: ['./src/**/ *.{js,jsx,ts,tsx}', './public/indexedDB.html'],
  darkMode: false,
  theme: {
    extends: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
  varients: {
    extend: {},
  },
  plugins: [],
};
