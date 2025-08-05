// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#4f2f9e",
          50: "#f3f0fa",
          100: "#e8e1f5",
          200: "#c5b5e6",
          300: "#a288d7",
          400: "#7f5cc8",
          500: "#4f2f9e",
          600: "#3f257e",
          700: "#2f1c5f",
          800: "#1f123f",
          900: "#0f0920",
        },
        green: {
          DEFAULT: "#80b423",
          50: "#f2f8e8",
          100: "#e5f1d1",
          200: "#cae3a3",
          300: "#b0d575",
          400: "#95c747",
          500: "#80b423",
          600: "#66901c",
          700: "#4d6c15",
          800: "#33480e",
          900: "#1a2407",
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
