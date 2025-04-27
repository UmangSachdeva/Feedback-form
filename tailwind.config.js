/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6ec1e4',
        secondary: '#54595f',
        text: '#7a7a7a',
        accent: '#61ce70',
        '747254e': '#02042d',
        '39d15ba': '#ffffff',
        'e81e841': '#a2a2a247',
        'f50fea6': '#ae0eb92e',
        'd6319bd': '#f9ecfa',
        '941cbe0': '#5c0e86',
        '1fb4c06': '#ae0eb9',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Roboto Slab', 'serif'],
        text: ['Roboto', 'sans-serif'],
        accent: ['Roboto', 'sans-serif'],
        ae8ccaf: ['Poppins', 'sans-serif'],
        '5d64160': ['Poppins', 'sans-serif'],
        '4507777': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        ae8ccaf: '16px',   // body text
        '5d64160': '36px', // heading
        '4507777': '19px', // subheading
      },
      fontWeight: {
        primary: 600,
        secondary: 400,
        text: 400,
        accent: 500,
        ae8ccaf: 400,
        '5d64160': 600,
        '4507777': 500,
      },
      backgroundSize: {
        '300': '300% 300%',
      },
      animation: {
        gradient: 'animatedgradient 3s ease alternate infinite',
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
