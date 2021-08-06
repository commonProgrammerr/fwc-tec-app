module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {      
      '6' : '1.5rem',
      '7' : '1.75rem',
      '8' : '2rem',
      '9' : '2.25rem',
      '10' : '2.5rem',
      '11' : '2.75rem',
      '12' : '3rem',
      '14' : '3.5rem',
      '16' : '4rem',
      '20' : '5rem',
      '24' : '6rem',
      '28' : '7rem',
      '32' : '8rem',
      '36' : '9rem',
      '40' : '10rem',
      '44' : '11rem',
      '48' : '12rem',
      '52' : '13rem',
      '56' : '14rem',
      '60' : '15rem',
      '64' : '16rem',
      '72' : '18rem',
      '80' : '20rem',
      '96' : '24rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
