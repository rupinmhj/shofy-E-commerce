/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
   
      colors:{
        custBlack:"#010F1C",
        custBlue:"#0989FF",
        custGrey:"#F6F7F9",
        custback:"#F1F1F1",
        custBlue2:"#90DAFF",
        cloud:"#ECF2F7",
        peachBlack:"rgb(1, 15, 28)",
        'tp-heading-secondary': '#021D35',
        customGray:"rgb(160,162,164)",
        textGray:"rgb(85, 88, 91)",
        bgGray:"#ECEFF4",
        textBlack:"rgb(2, 29, 53)",
        bgBlue:" rgb(9, 137, 255)",
        bgWhite:"#F4F7F9",
        sliderBlue:"rgb(17, 80, 97)"
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        oregano: ['Oregano', 'serif'],
        jost: ['Jost', 'sans-serif'],
        charm: ['Charm', 'cursive'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out',  // Define custom animation
        fadeInUp: 'fadeInUp 1s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.9)', // Start 20px below
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)', // End at normal position
          },
          dash: {
            to: {
              strokeDashoffset: '0',
            },
          },
        },
        animation: {
          'dash-move': 'dash 4s linear infinite',
        },
          fadeInUp: {
            '0%': {
              opacity: 0,
              transform: 'translate3d(0, 20px, 0)',
            },
            '100%': {
              opacity: 1,
              transform: 'translate3d(0, 0, 0)',
            },
          },
      
          
   
  },
},
  },
  plugins: [
    require("tailwindcss-motion"),
    require('tailwindcss-animate'),

  ],
}

