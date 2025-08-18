/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
          '50%': { transform: 'translateY(-50px) rotate(180deg)', opacity: 0.8 },
          '100%': { transform: 'translateY(0) rotate(360deg)', opacity: 1 },
        },
      },
      animation: {
        gradient: 'gradient 10s ease infinite',
        float: 'float linear infinite',
      },
    },
  },
  plugins: [],
};
