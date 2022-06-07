module.exports = {
  content: [
    "./src/**/*.tsx",
    "./components/**/*.tsx",
    "./views/**/*.tsx",
    "./routes/**/*.tsx"
  ],
  theme: {
    extend: {

      width:{
        '104.43': '6.527',
        'padrao_tela': '85.25'
      },
      height:{
        '102.3': '6.794',
        'padrao_tela': '47.953'
      },
      fontSize:{
        'menu': '1.432rem',
      },
      fontFamily:{
        'padrao': ['League Spartan', 'sans-serif']
      },
      colors:{
        'preto': '#020905',
        'verde-claro': '#00C041'
      }
    },
    container:{
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      },
      
    },
  },
  plugins: [],
}