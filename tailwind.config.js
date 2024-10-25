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
      Montserrat: ['Montserrat', 'san-serif'],
    },
    extend: {
      backgroundColor:{
        whiteez: '#EEEEEE',
        barbel: '#10375C',
        sailor: '#5070A0',
        grayy: '#9DB2BF',
      },
      textColor:{
        blckgray: '#222831',
        blueblack: '#0B192C',
        blackky: '#1A1A19',
        blacksy: '#222831',
      },
      height: {
        '97': '687px',  // Custom height for 75%
        '98': '600px', 
        '99': '495px', 
      },
      width: {
        '97': '1450px',  // Custom height for 75%
        '98': '800px', 
      },
      colors: {
        customColor1: '#3A4D67',  // Darker blue
        customColor2: '#5070A0',  // Mid-tone blue
        customColor3: '#2B497F',  // Deep blue
        blackky: '#1A1A19',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #3A4D67, #5070A0, #2B497F)',
      },
      
    },
  },
  plugins: [],
}

