/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sulphur-point': ['Sulphur Point', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']

      },
      colors: {
        "sidebar-bg-clr": '#131313',
        "dashboard-bg-clr": '#F8F8F8',
        "text-bg-clr":'#D4D4FC',
        'green-div-bg': '#DDF6DE',
        'green-div-text-clr': '#608662',
        'graph-green':'#C2ECC1',
        'graph-purple':'#C5C7F6',
        'text-clr' :'#94979A'
      }
    },
  },
  plugins: [],
}

