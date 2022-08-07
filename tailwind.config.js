/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: "#536079",
        "muted-50": "#222A3B",
        "loozr-purple": "#8369F4",
        "loozr-green": "#15FFAB",
        "dark-900": "#0C0F15",
        "dark-800": "#12161F",
        "dark-700": "#141922",
        "grey-white": "#536079",
      },
      backgroundImage: {
        "gradient-ld":
          "linear-gradient(180.44deg, #8369F4 27.17%, #F039E2 156.68%)",
        "s-gradient":
          "linear-gradient(180deg, #8369F4 27.69%, #F039E2 178.46%)",
      },
      fontSize: {
        label: ["3.5rem", 1],
      },
    },
  },
  plugins: [],
};
