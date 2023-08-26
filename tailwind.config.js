/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/App.jsx',
    './src/main.jsx',
    './src/components/Navbar.jsx',
    './src/components/Hero.jsx',
    './src/components/Skills.jsx',
    './src/components/Projects.jsx',
    './src/components/Footer.jsx',
    './src/components/Contact.jsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'night' : "url('./source/images/sky.png')",
        'dark-night' : "url('./source/images/dark-sky.png')",
        'shopping' : "url('./source/images/shopping.png')",
        'multi' : "url('./source/images/multi-step.png')",
        'rps' : "url('./source/images/rps.png')",
        'ipt' : "url('./source/images/ipt.png')",
        'hang' : "url('./source/images/hangman.png')",
        'pok' : "url('./source/images/pokemon.png')",
      },
      fontFamily : {
        'texturina' : ['Texturina']
      },
      colors: {
        'nav1' : '#3d355b',
        'nav2' : '#262036',
        'hero' : '#6c5ea1',
        'bblack' : '#000',
      },
      height: {
        'sphere' : '35rem',
        'skill-card' : '15rem',
        'skill-container' : '20rem',
        'wrapper' : '25rem',
        'ben' : '15rem',

      },
      width: {
        'header' : '25rem',
        'skill' : '15rem',
        'skills' : '70rem',
        'wrapper' : '27rem',
        'inp' : '35rem',
      },
      skew: {
        '30' : '30deg'
      },
      boxShadow: {
        'shop': '0px 10px 30px  #c03f9b',
        'multi': '0px 10px 30px  #478bd7',
        'rcs': '0px 10px 30px  #0c0b7e',
        'ipt': '0px 10px 30px #f0a73d',
        'hang': '0px 10px 30px #ddd18c',
        'pok': '0px 10px 30px #eee9c6',
      }
    },
  },
  plugins: [
  ],
}

