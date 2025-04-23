/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pri_head: ["Raleway", "sans serif"],
        sec_para: ["Jost", "sans-serif"],
      },
      boxShadow: {
        "text-shadow": "2px 2px 4px rgba(255, 255, 255, 0.8)",
      },
      colors: {
        primary: "#6F94B7",
        secondary: "#19497A",
      },
    },
  },
  plugins: [require("daisyui")],
};
