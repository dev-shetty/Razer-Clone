/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-900": "#000000",
        "primary-850": "#111111",
        "primary-800": "#222222",
        "primary-300": "#888888",
        "primary-200": "#555555",
        "primary-400": "#999999",
        "primary-100": "#FFFFFF",
        "razer-green": "#44d62c",
      },
      fontFamily: {
        primary: ["Razer", "sans-serif"],
      },
      fontSize: {
        primary: "0.9rem",
      },
    },
  },
  plugins: [],
}
