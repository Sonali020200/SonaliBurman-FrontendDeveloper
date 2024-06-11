/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
      },
      fontFamily:{
        outfit : ["Outfit", "sans-serif"]
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(92, 195, 250, 0.28) 0%, rgba(92, 195, 250, 0) 100%)',
      },
      keyframes: {
        'left-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' },
        },
        'right-left': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50px)' },
        },
      },
      animation: {
        'left-right': 'left-right 5s infinite',
        'right-left': 'right-left 5s infinite',
      },

    },
  },
  plugins: [],
};
