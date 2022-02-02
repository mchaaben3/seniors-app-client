module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color: {
      coffee: {
        light: '#A49393',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
