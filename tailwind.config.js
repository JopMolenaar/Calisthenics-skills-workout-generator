/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
            './workout.html',
          ],
  theme: {
    screens: {
      usm:"687px",
      md: '895px',
      mdl: "1070px",
      mdlg: "1220px",
      lg: '1320px',
      xl: '1545px',
      xxl: "1745px",
    },
    colors: {
      'white': '#FFFFFF',
      'gray-light': '#F8F8F8',
      'black': '#000000',
      'blue': '#306579',
      'blue-dark': '#18333D',
      'blue-light': '#306579',
      'darkgray-dark': '#262626',
      'darkgray-light': '#565656',
    },
    fontFamily: {
      telugu: ['Telugu Sangam MN', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
// tailwindcss -i ./src/input.css -o ./dist/output.css --watch
