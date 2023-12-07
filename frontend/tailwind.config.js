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
          secondary: "#FF0000",
          "primary-focus": "#0000FF",
          color: "#000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

