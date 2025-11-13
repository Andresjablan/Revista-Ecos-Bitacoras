// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        eightPath: {                // <-- agregado
          "0%":   { transform: "translate(0, 0)" },
          "25%":  { transform: "translate(40px, -45px)" },
          "50%":  { transform: "translate(0, -40px)" },
          "75%":  { transform: "translate(-40px, -45px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        eight: "eightPath 4s linear infinite", // <-- agregado
      },
    },
  },
  plugins: [],
}

