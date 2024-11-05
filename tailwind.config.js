/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        cantoEsquerdo: '4.1px -5px 0 0 white',
        cantoDireito: '-4.1px -5px 0 0 white',
        cardShadow: '3px 3px 9px -3px rgba(0,0,0,0.71)',
      },
      colors: {
        colorMenuPrimary: '#0C3EA6',
        colorMenuSecondary: '#051840',
        colorBackground: '#ECE9E9',
        colorCardPrimary: '#259821',
        colorCardSecondary: '#FFC300',
        colorCardTerciary: '#FF7200',
        colorSearch: '#D9D9D9',
        popup: '#D9D9D9',
        delete: '#D30000',
        colorAlertErrorBorder: '#EB5757',
        colorAlertError: '#FDEEEE',
        colorAlertInfoBorder: '#5458F7',
        colorAlertInfo: '#EEEEFE',
        colorAlertSucessBorder: '#00CC99',
        colorAlertSucess: '#E6FAF5',
        colorAlertWarningBorder: '#F2C94C',
        colorAlertWarning: '#FDF8E8',
        colorAlertMobileWarning: '#F6E2C2',
        colorAlertMobileError: '#EEC2C2',
        colorAlertMobileInfo: '#C2E7EA',
        colorAlertMobileSucess: '#C2E2CD',
        colorAlertImg: '#88B0DA',
        color404: '#8581FF',
        corDeFundo:'#F9FAFB',
        
      }
    },
  },
  plugins: [],
}

