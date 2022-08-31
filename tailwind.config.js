/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: theme => ({
        'Big-Shoulders-Display': ['Big Shoulders Display', 'cursive'] ,
        'Lexend-Deca': ['Lexend Deca', 'sans-serif']
      }),
      backgroundColor: theme => ({
        'bright-orange':'var(--bright-orange)' ,
        'dark-cyan':'var(--dark-cyan)' ,
        'very-dark-cyan':'var(--very-dark-cyan)' ,
        'transparent-white':'var(--transparent-white)' ,
        'very-light-gray':'var(--very-light-gray)' ,
      }) ,
      textColor: theme => ({
        'bright-orange':'var(--bright-orange)' ,
        'dark-cyan':'var(--dark-cyan)' ,
        'very-dark-cyan':'var(--very-dark-cyan)' ,
        'very-light-gray':'var(--very-light-gray)' ,
      }),
    },
  },
  plugins: [],
}
