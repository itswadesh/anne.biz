const pwa = {
  manifest: {
    short_name: 'Anne',
    name: 'Anne',
    description: 'Anne ecommerce',
  },
}
const colors = {
  primary: {
    500: '#FB7801', // brown
  },
  secondary: {
    100: '#dff7d5', // very light green
    200: '#32CD32', // green
    400: '#78f547', // light green
    500: '#000000', // black
  },
  accent: {
    100: '#faebeb', // very light red
    500: '#ff8c00', // light-orange
    600: '#C53193;', // pink
    700: '#ff4500', // orange
    800: '#c30b4e', // dark-pink
    900: '#FF461B;', // red
  },
  brand: {
    500: '#f59e0b' /* yellow-500 */,
    700: '#ff0000' /* red */,
  },
}
const fontFamily = {
  sans: ['Inter'],
}
module.exports = { pwa, colors, fontFamily }
