/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'menu-in': {
          '0%': {
            // transform: 'scaleX(0) scaleY(0)',
            transform:"translateX(-100%)",
            transformOrigin:"0% 100%",
            opacity: '0'
          },
          '100%': {
            // transform: 'scaleX(1) scaleY(1)',
            transform:"translateX(0%)",
            transformOrigin:"0% 100%",
            opacity: '1'
          }
        },
        'menu-out': {
          '0%': {
            // transform: 'scaleX(1) scaleY(1)',
            transform:"translateX(0)",
            transformOrigin:"0% 100%",
            opacity: '1'
          },
          '100%': {
            // transform: 'scaleX(0) scaleY(0)',
            transform:"translateX(-100%)",
            transformOrigin:"0% 100%",
            opacity: '0'
          }
        }
      },
      animation: {
        'menu-in': 'menu-in 0.5s ease-out forwards',
        'menu-out': 'menu-out 0.5s ease-in forwards'
      }
    }
  },
  plugins: [],
}

