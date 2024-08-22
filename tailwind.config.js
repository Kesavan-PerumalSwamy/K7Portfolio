/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Primary' : '#F7EFE5',
        'Secondary' : '#674188',
        'Purple' : '#C8A1E0',
        'Lavendar' : '#E3D4ED',
      },
      fontFamily: {
        'walbaum': ['walbaum'],
        'altone': ['altone'],
        'cerotta': ["cerotta"],
        'altone-oblique': ['altone-oblique'],
        'OpenSans':['Open Sans']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

