/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FEFEFE",
        para_color: "#525252",
        heading_color:"#000000",
        primary_color:"#00664E",
        secondary_color:"#00000040",
        accent_color:"#CA943A"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        allenoire: ['AllenoireFont', 'serif'],
      },
    },
  },
  plugins: [],
};
