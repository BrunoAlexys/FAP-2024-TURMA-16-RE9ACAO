/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        cantoEsquerdo: '4.1px -5px 0 0 white',
        cantoDireito: '-4.1px -5px 0 0 white' 
      },
      colors:{
        azulPrimario: '#0C3EA6',
        azulPrimario2: '#051840',
        laranjaPrimario: '#FF7200',
        verdePrimario: '#259821',
        amareloPrimario: '#FFC300'
      }
    },
  },
  plugins: [],
}

