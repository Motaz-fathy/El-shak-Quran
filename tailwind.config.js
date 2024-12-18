
// eslint-disable-next-line no-undef
import plugin from 'tailwindcss/plugin';
/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE 10+ */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* WebKit */
        },
      });
    }),
  ],
}

