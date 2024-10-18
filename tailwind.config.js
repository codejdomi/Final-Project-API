/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto Slab', 'san-serif',], 
      source: ['Source Sans 3', 'san-serif',],
      roboto: ['Roboto', 'san-serif',],
      poppins: ['Poppins', 'san-serif',],
    },
    extend: {
      backgroundColor:{
        whiteez: '#EEEEEE',
        
      },
      colors: {
        bluez: '#1E3E62',
      },
      textColor:{
        blckgray: '#222831',
      },
    },
  },
  plugins: [],
}

