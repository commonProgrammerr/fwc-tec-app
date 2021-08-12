module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: autoGenetareSizes(6, 120),
    minHeight: autoGenetareSizes(30, 240)
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

function autoGenetareSizes(start, end) {
  const sizes = {}

  for (let i = start; i <= end; i++) {
    sizes[''+i] = i * 0.25 + 'rem'
  }

  return sizes
}