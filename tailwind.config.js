/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-bg-clr": '#131313',
        "dashboard-bg-clr": '#F8F8F8',
        "text-bg-clr":'#D4D4FC'
      }
    },
  },
  plugins: [],
}

