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
        'gray-700-spotify' : '#282828',
        'gray-600-spotify' : '#404040'
      },
      spacing: {
        '22' : '5.5rem',
        '200' : '40rem'
      },
      margin: {
        '0.5': '0.16rem',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require("@tailwindcss/ui")],
};
