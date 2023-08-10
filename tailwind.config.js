/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue500': '#0d65b6',
        'primary-white': '#fff',
        'primary-black': '#010101',
        lightgray: '#d0d0d0',
        cornflowerblue: '#419df1',
        aliceblue: '#ddefff',
        dimgray: {
          100: '#717171',
          200: '#545454',
          300: '#515151',
          400: '#505050',
          500: '#4e4e4e',
          600: '#4d4d4d',
          700: 'rgba(81, 81, 81, 0.8)',
          800: 'rgba(80, 80, 80, 0.2)',
        },
        'neutral-gray600484848': '#484848',
        black: '#000',
        silver: '#bfbfbf',
        blueviolet: '#9747ff',
        'secondary-blue700': '#064682',
        darkslategray: {
          100: '#424242',
          200: '#3f3f3f',
          300: '#313131',
          400: '#303030',
          500: '#292d32',
          600: 'rgba(48, 48, 48, 0.74)',
          700: 'rgba(66, 66, 66, 0.4)',
        },
        gainsboro: {
          100: '#e8e8e8',
          200: '#dedede',
          300: '#d9d9d9',
          400: 'rgba(217, 217, 217, 0.46)',
          500: 'rgba(217, 217, 217, 0.68)',
        },
        whitesmoke: {
          100: '#f9f9f9',
          200: '#f7f7f7',
          300: '#f1f3f4',
          400: '#f1f1f1',
          500: '#ebebeb',
          600: '#e9e9e9',
        },
        darkgray: {
          100: '#acacac',
          200: '#a5a5a5',
          300: '#959595',
        },
        gray: {
          100: '#fdfdfd',
          200: '#fcfcfc',
          300: '#f8fcff',
          400: '#fbfbfb',
          500: '#fafafa',
          600: '#7f7f7f',
          700: '#202020',
          800: '#062542',
          900: '#191a1f',
          1000: '#001d37',
          1100: '#001222',
          1200: 'rgba(252, 252, 252, 0.54)',
          1300: 'rgba(0, 0, 0, 0.56)',
          1400: 'rgba(0, 0, 0, 0.6)',
          1500: 'rgba(0, 0, 0, 0.58)',
          1600: 'rgba(0, 0, 0, 0.67)',
          1700: 'rgba(0, 0, 0, 0.77)',
          1800: 'rgba(0, 0, 0, 0.44)',
          1900: 'rgba(0, 0, 0, 0.2)',
          2000: 'rgba(0, 0, 0, 0.5)',
          2100: 'rgba(0, 0, 0, 0.03)',
        },
        dodgerblue: {
          100: 'rgba(0, 133, 255, 0.69)',
          200: 'rgba(0, 133, 255, 0.1)',
        },
        royalblue: '#265ce9',
        brown: '#9d1f30',
        mediumaquamarine: '#1abc9c',
        steelblue: '#3498db',
        lightsteelblue: '#abcae7',
        primary: '#0085ff',
        'neutral-gray700010101': '#010101',
        'neutral-gray100f1f1f1': '#f1f1f1',
        mediumslateblue: '#3355de',
        'neutral-gray300dododo': '#d0d0d0',
        'neutral-gray500747474': '#747474',
        green: '#007c00',
        error: '#b72a2a',
        'neutral-gray200e8e8e8': '#e8e8e8',
        'neutral-gray-50': '#f8fafc',
        'secondary-blue50': '#ddefff',
        'primary-blue5001': '#0d64b5',
        'shades-white': '#fff',
      },
      fontFamily: {
        'label-small14sb': 'Poppins',
        inherit: 'inherit',
        inter: 'Inter',
        'avenir-next': "'Avenir Next'",
        'work-sans': "'Work Sans'",
        'body-small14': 'Poppins',
        'paragraph-p3-regular': "'Plus Jakarta Sans'",
        'body-xs12': 'Poppins',
      },
      borderRadius: {
        '3xs': '10px',
        '8xs': '5px',
        'xs-3': '11.3px',
        '2xs': '11px',
        '10xs-5': '2.5px',
        '4xs': '9px',
        '5xs-6': '7.6px',
      },
    },
    fontSize: {
      sm: '14px',
      xs: '12px',
      smi: '13px',
      '5xl': '24px',
      '3xs': '10px',
      xl: '20px',
      '13xl': '32px',
      base: '16px',
      lg: '18px',
      '3xl': '22px',
      '5xl-6': '24.6px',
      'base-4': '16.4px',
      '17xl': '36px',
      '2xs': '11px',
      '7xl-8': '26.8px',
      'mid-9': '17.9px',
      '9xl': '28px',
    },
    screens: {
      lg: {
        max: '1200px',
      },
      md: {
        max: '960px',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
