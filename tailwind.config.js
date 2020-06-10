module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"],
      },
      colors: {
        'gray-900-spotify' : '#121212',
        'gray-800-spotify' : '#181818',
        'gray-700-spotify' : '#282828'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require("@tailwindcss/ui")],
};
