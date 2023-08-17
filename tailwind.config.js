/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    //screens:{
      //'sm': '567px',
      // => @media (min-width: 640px) {...}

      //'md': '768px',
      // => @media (min-width: 768px) {...}

      //'lg': '1024px',
      // => @media (min-width: 1024px) {...}

      //'xl': '1280px',
      // => @media (min-width: 1280px) {...}

      //'2xl': '1320px',
      // => @media (min-width: 1536px) {...}
    //},

    container: {
      padding: {
        DEFAULT: '.96rem',
        sm: '1.96rem',
        lg: '3.96rem',
        xl: '1.90rem',
        '2xl': '5.96rem'
      },
    },
    
    extend: {
      fontFamily: {
        Kanit: "'Kanit', sans-serif",
        Inter: "'Inter', sans-serif",
        bodyFont: "'DM Sans', sans-serif"
      },

      listStyleImage:{
        
      },
      
      colors: {
        'primary': '#15FF8F',
        'secondary': '#000000',
        'bodyLight': '#D4D4D4',
        'colorHeading': '#212121',
        'offWhite': '#FFFCFC',
        'Gray': '#F8F8F8',
        'Gray-500': '#E5E5E5',
        'body/Dark': '#494949',
        'white/100%': '#FFFFFF'
      }
    
    },
  },
  plugins: [],
}