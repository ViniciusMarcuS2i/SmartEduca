/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1FCDFF",
        secondary: "#ffff00"
      },
      fontFamily: {
        sans: ["Poppins_400Regular", "system-ui", "sans-serif"],
        poppinsMedium: ["Poppins_500Medium", "sans-serif"],
        poppinsSemi: ["Poppins_600SemiBold", "sans-serif"],
        poppinsBold: ["Poppins_700Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
}