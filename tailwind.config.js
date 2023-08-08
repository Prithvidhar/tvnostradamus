/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./public/*.html"],
  theme: {
    extend: 
    {
      fontFamily:
      {
        'bebas':['Bebas Neue', 'sans-serif'],
        'anton':['Anton', 'sans-serif']
      }, 

    },
  },
  plugins: [],
}

