/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            night: '#0f0d13',
            twilight: '#1a151f',
            plum: '#2a1e32',
            ash: '#40374c',
            wine: '#523850',
            roseDust: '#b08a94',
            lilac: '#a48db3',
            flamingo: '#c96d86',
            mutedPink: '#9e6a7c',
            fadedLavender: '#5f4b66',
            stone: '#dcd3cb',
          },
          fontFamily: {
            display: ['"EB Garamond"', 'serif'],
            body: ['"Inter"', 'sans-serif'],
          }
        }
      }      
    },
  },
  plugins: [],
};
