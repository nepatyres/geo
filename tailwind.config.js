module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,ts}', // This will scan all HTML and TypeScript files in the `src` directory
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-regular': ['"Inter-Regular"'],
        'raleway': ['"Raleway"'],
        'noto': ['"Noto"'],
        'playfair': ['"Playfair"'],
      }
    },
  },
  plugins: [],
}
