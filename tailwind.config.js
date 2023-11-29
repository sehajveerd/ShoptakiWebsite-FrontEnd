/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '10px': '10px', // custom margin value for 10px
      },
      colors: {
        'primary-blue-500': '#0d65b6',
        lightgray: '#d0d0d0',
        silver: '#bfbfbf',
        white: '#ffffff',
        black: '#000000',
        green: '#007c00',
        red: '#b72a2a',
        primary: '#0085ff',
        success: '#007c00',
        error: '#b72a2a',
        cornflowerblue: '#419df1',
        primarywhite: '#fff',
        whitesmoke: {
          100: '#f1f1f1',
          200: '#ebebeb',
        },

        dimgray: {
          100: '#717171',
          200: '#545454',
          300: '#515151',
          400: '#505050',
          401: '#50505033',
          500: '#4e4e4e',
          600: '#4d4d4d',
          700: '#404040',
          800: '#303030',
        },
        gainsboro: {
          100: '#e8e8e8',
          200: '#dedede',
          300: '#d9d9d9',
          400: 'rgba(217, 217, 217, 0.46)',
          500: 'rgba(217, 217, 217, 0.68)',
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
        neutralgray: {
          50: '#f8fafc',
          100: '#f1f1f1',
          200: '#e8e8e8',
          300: '#d0d0d0',
          400: '#717171',
          500: '#747474',
          600: '#484848',
          700: '#010101',
        },
        darkslategray: {
          100: '#3f3f3f',
          200: '#313131',
          300: '#303030',
        },
        secondaryblue: {
          50: '#ddefff',
          700: '#064682',
        },
        primaryblue: {
          500: '#0d65b6',
        },
      },
      fontFamily: {
        inherit: 'inherit',
        inter: 'Inter',
        'avenir-next': "'Avenir Next'",
        'work-sans': "'Work Sans'",
        'body-small14': 'Poppins',
        'plus-jakarta-sans': "'Plus Jakarta Sans'",
        poppins: 'Poppins',
      },
      borderRadius: {
        '10xs-5': '2.5px',
        '8xs': '5px',
        '5xs-6': '7.6px',
        '4xs': '9px',
        '3xs': '10px',
        '2xs': '11px',
        '2xs-3': '11.3px',
        sm: '14px',
        '4xl-6': '23.6px',
      },
    },
    fontSize: {
      '3xs': '10px',
      '2xs': '11px',
      xs: '12px',
      smi: '13px',
      sm: '14px',
      base: '16px',
      'base-4': '16.4px',
      'mid-9': '17.9px',
      lg: '18px',
      xl: '20px',
      '3xl': '22px',
      '5xl': '24px',
      '5xl-6': '24.6px',
      '7xl-8': '26.8px',
      '9xl': '28px',
      '13xl': '32px',
      '17xl': '36px',
      '105xl': '124px',
      inherit: 'inherit',
      32: '2rem',
    },
    screens: {
      lg: {
        max: '1200px',
      },
      md: {
        max: '960px',
      },
      sm: {
        max: '420px',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
