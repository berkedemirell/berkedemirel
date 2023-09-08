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
    './src/source/data/data.json',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shopping' : "url('./source/images/shopping.webp')",
        'multi' : "url('./source/images/multi-step.webp')",
        'rps' : "url('./source/images/rps.webp')",
        'ipt' : "url('./source/images/ipt_1.webp')",
        'hang' : "url('./source/images/hangman_1.webp')",
        'pok' : "url('./source/images/pokemon.webp')",
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
        'inp2' : '20rem',
        'inp3' : '45rem',
        'mes-div' : '10rem',
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
      },
      screens: {
        'll' : {'max' : '1100px'},
        'lg' : {'max' : '950px'},
        'md' : {'max' : '900px'},
        'mmd' : {'max' : '800px'},
        'mmmd' : {'max' : '650px'},
        'ssm' : {'max' : '500px'},
        'sms' : {'max' : '450px'},
        'smss' : {'max' : '550px'},
        'xxl' : {'min' : '1500px'},
        'gia' : {'min' : '1700px'},
        'ss' : {'max' : '400px'},
        'sss' : {'max' : '350px'},
      },
      translate: {
        'a' : '28rem',
        'b' : '70rem',
        'c' : '25rem',
        'd' : '45rem',
        'ee' : '35rem',
        'ff' : '27rem',
        'gg' : '2rem',
      }
    },
  },
  plugins: [
  ],
}

