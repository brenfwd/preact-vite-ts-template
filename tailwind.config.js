const defaultTheme = require("tailwindcss/defaultTheme");
const Color = require("color");

const lighten = (color, amount) => Color(color).lighten(amount).hsl().string();
const darken = (color, amount) => Color(color).darken(amount).hsl().string();

const palette = (base) => {
  return {
    DEFAULT: base,
    50: lighten(base, 0.4),
    100: lighten(base, 0.3),
    200: lighten(base, 0.2),
    300: lighten(base, 0.1),
    400: base,
    500: darken(base, 0.1),
    600: darken(base, 0.2),
    700: darken(base, 0.3),
    800: darken(base, 0.4),
    900: darken(base, 0.5),
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // These are loaded from Google Fonts in index.html
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        mono: ["PT Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: palette("hsl(257, 50%, 50%)"),
        secondary: palette("hsl(300, 40%, 50%)"),
        dark: palette("hsl(212, 86%, 12%)"),
        black: palette("hsl(0, 0%, 5%)"),
        grey: palette("hsl(206, 5%, 40%)"),
        light: palette("hsl(0, 0%, 95%)"),
        success: palette("hsl(130, 86%, 65%)"),
        info: palette("hsl(222, 86%, 65%)"),
        warning: palette("hsl(60, 80%, 50%)"),
        danger: palette("hsl(0, 86%, 65%)"),
      },
    },
  },
  plugins: [],
};
