module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage :(theme) => ({
        'fundo-pna': "url('/pna3.png')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
