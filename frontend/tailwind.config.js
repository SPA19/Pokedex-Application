/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFFF00",
          secondary: "#0000FF",
          "primary-focus": "#FF0000",
          color: "#000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

