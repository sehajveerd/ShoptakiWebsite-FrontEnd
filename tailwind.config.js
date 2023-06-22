/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        gray: {
          100: '#fdfdfd',
          200: '#fcfcfc',
          300: '#f8fcff',
          400: '#fbfbfb',
          500: '#202020',
        },
        darkslategray: {
          100: '#424242',
          200: '#3f3f3f',
          300: '#313131',
        },
        whitesmoke: {
          100: '#f1f1f1',
          200: '#ebebeb',
        },
        dimgray: {
          100: '#515151',
          200: '#4e4e4e',
          300: '#4d4d4d',
        },
        primary: '#0085ff',
        gainsboro: '#dedede',
        black: '#000',
        darkgray: '#a6a6a6',
        blueviolet: '#9747ff',
        royalblue: '#265ce9',
        brown: '#9d1f30',
      },
      fontFamily: {
        poppins: 'Poppins',
        inherit: 'inherit',
        inter: 'Inter',
        body: "'Work Sans'",
        'avenir-next': "'Avenir Next'",
      },
      borderRadius: {
        '3xs': '10px',
        'xs-3': '11.3px',
        '2xs': '11px',
        '4xs': '9px',
        '6xs': '7px',
      },
    },
    fontSize: {
      base: '16px',
      '5xl': '24px',
      sm: '14px',
      xl: '20px',
      '13xl': '32px',
      '5xl-6': '24.6px',
      '17xl': '36px',
      '15xl': '34px',
      '77xl': '96px',
      xs: '12px',
    },
    screens: {
      md: {
        max: '960px',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
