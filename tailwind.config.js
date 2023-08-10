/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}', // Tremor module
  ],
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
        // Tremor tailwind configuration
        tremor: {
          brand: {
            faint: '#eff6ff', // blue-50
            muted: '#bfdbfe', // blue-200
            subtle: '#60a5fa', // blue-400
            DEFAULT: '#3b82f6', // blue-500
            emphasis: '#1d4ed8', // blue-700
            inverted: '#ffffff', // white
          },
          background: {
            muted: '#f9fafb', // gray-50
            subtle: '#f3f4f6', // gray-100
            DEFAULT: '#ffffff', // white
            emphasis: '#374151', // gray-700
          },
          border: {
            DEFAULT: '#e5e7eb', // gray-200
          },
          ring: {
            DEFAULT: '#e5e7eb', // gray-200
          },
          content: {
            subtle: '#9ca3af', // gray-400
            DEFAULT: '#6b7280', // gray-500
            emphasis: '#374151', // gray-700
            strong: '#111827', // gray-900
            inverted: '#ffffff', // white
          },
        },
        // dark mode tremor configuration
        'dark-tremor': {
          brand: {
            faint: '#0B1229', // custom
            muted: '#172554', // blue-950
            subtle: '#1e40af', // blue-800
            DEFAULT: '#3b82f6', // blue-500
            emphasis: '#60a5fa', // blue-400
            inverted: '#030712', // gray-950
          },
          background: {
            muted: '#131A2B', // custom
            subtle: '#1f2937', // gray-800
            DEFAULT: '#111827', // gray-900
            emphasis: '#d1d5db', // gray-300
          },
          border: {
            DEFAULT: '#1f2937', // gray-800
          },
          ring: {
            DEFAULT: '#1f2937', // gray-800
          },
          content: {
            subtle: '#4b5563', // gray-600
            DEFAULT: '#6b7280', // gray-600
            emphasis: '#e5e7eb', // gray-200
            strong: '#f9fafb', // gray-50
            inverted: '#000000', // black
          },
        },
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

        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
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

      'tremor-label': ['0.75rem'],
      'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
      'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
      'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
    },
    boxShadow: {
      // light
      'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      'tremor-card':
        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'tremor-dropdown':
        '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      // dark
      'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      'dark-tremor-card':
        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'dark-tremor-dropdown':
        '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
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
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require('@headlessui/tailwindcss')],
};
