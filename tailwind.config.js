module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"],
        firacode: ["Fira Code"],
        raleway: ["Raleway"],
      },
      maxWidth: {
        '0.5xl': '39rem',
      },
      scale: {
        '102': '1.02',
      },
      transitionDuration: {
        '600': '600ms',
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
