/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floating: 'float 2s ease-in-out infinite',
      },

      // 
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-55%)' },
        },
      },
      animation: {
        scrollImage: 'scroll 5s linear infinite',
      },



    },
  },



  plugins: [],
}

