/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#FFFFFF',
        regBg: '#141B4E',
        delta_traingle: '#141B4E'
      },
      fontFamily: {
        body: ['Poppins'],
        delta: ['Montserrat']
     },
      fontSize: {
        nav: '1.25rem',
        register:'0.813rem',
       
      },
      borderRadius: {
        reg_bord: '2.813rem'
      }
        

    },
  },
  plugins: [],
}
