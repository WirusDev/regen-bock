/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-gradient": "url('/photos/GRADIENT.jpeg')",
      },
      fontFamily: {
        h: ["ABCGintoNord", "sans-serif"],
        p: ["ABCGintoNormal", "sans-serif"],
      },
      colors: {
        bg: "#F2F4F4",
        text: "#1F1F1F",
        primary: {
          DEFAULT: "#1F1F1F",
          light: "#374151",
          dark: "#111827",
        },
      },
      fontSize: {
        "9xl": ["50rem"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#1F1F1F",
          secondary: "#374151",
          accent: "#111827",
          neutral: "#3D4451",
          "base-100": "#1F1F1F",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
