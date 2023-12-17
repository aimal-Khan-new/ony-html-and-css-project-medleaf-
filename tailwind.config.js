/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

      screens: {
        'xx-sm': {'min':'300px', 'max':'639px'},

        'xx-smmd': {'min':'420px', 'max':'640px'},

        'tablet': {'min':'640px', 'max':'767px'},

        'destop': {'min':'768px', 'max':'950px'},
        
        'desset': {'min':'650px', 'max':'940px'},
      },


      animation:{
        move:'move 7s ease-in-out infinite', wiggle:'wiggle 1s ease-in-out 1', translate:"translate 7s ease-in-out infinite"
      },
        
      keyframes:{
        move: {
          '0%' : {
            transform:"translateY(5vh)"
          },
          '50%' : {
            transform:"translateY(-7vh)"
          },
          '100%' : {
            transform:"translateY(5vh)"
          }

        },
        wiggle: {
          "0%" : {
            transform:"rotate(0deg)"
          },

          "40%" : {
            transform:"rotate(45deg)"
          },
          
          
          "80%" : {
            transform:"rotate(-45deg)"
          },
          
          "100%" : {
            transform:"rotate(0deg)"
          },
        },

        translate: {
          "0%" : {
            transform:"translateX(-2vw)"
          },
  
          "50%" : {
            transform:"translateX(2vw)"
          },
  
          "100%" : {
            transform:"translate(-2vw)"
          }
        }
      },


      
      
    
      
    },
  },
  plugins: [],
}

