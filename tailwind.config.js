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
        'menu': '1.632rem',
      },
      fontFamily:{
        'menu-inicial': ['League Spartan', 'sans-serif']
      },
      backgroundImage: theme=> ({
        'jogador-index': "url('../src/assets/images/jogador-1.svg')",
      }),
    },
  },
  plugins: [],
}