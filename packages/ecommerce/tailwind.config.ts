/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  zIndex: {
    negative: '-1',
    normal: '10',
    fixed: '100',
    modal: '500',
    tooltip: '1000'
  },
  theme: {
    screens: {
      sm: '320px',
      md: '640px',
      lg: '1024px',
      xl: '1400px'
    },
    flex: {
      card: '0 0 300px',
      none: 'none'
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    boxShadow: {
      sm: '0px 0px 1px rgba(0, 0, 0, 0.039), 0px 0.5px 1.5px rgba(0, 0, 0, 0.19)',
      md: '0px 0.25px 1px rgba(0, 0, 0, 0.039), 0px 0.85px 3px rgba(0, 0, 0, 0.19)',
      lg: '0px 0.5px 1.75px rgba(0, 0, 0, 0.039), 0px 1.85px 6.25px rgba(0, 0, 0, 0.19)',
      xl: '0px 3px 6px rgba(0, 0, 0, 0.039), 0px 7px 24px rgba(0, 0, 0, 0.19)'
    },
    maxWidth: {
      1400: '1500px',
      1200: '1200px',
      1024: '1024px'
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFF',
      primary: {
        50: ' #fbe9ed',
        100: '#f5c2ca',
        200: '#f0a3b0',
        300: '#eb8495',
        400: '#e6657b',
        500: '#e14760',
        600: '#cc213e',
        700: '#99192e',
        800: '#66111f',
        900: '#33080f'
      },
      info: {
        50: ' #e7f6fd',
        100: '#a6ddf8',
        200: '#7accf5',
        300: '#4ebbf2',
        400: '#22aaee',
        500: '#09577d',
        600: '#1090d0',
        700: '#0d73a7',
        800: '#063a53',
        900: '#031d2a'
      },
      warning: {
        50: ' #fcf6e8',
        100: '#f7e4be',
        200: '#f3d79d',
        300: '#f0c97c',
        400: '#ecbc5b',
        500: '#e8ad3b',
        600: '#d09318',
        700: '#9c6e12',
        800: '#68490c',
        900: '#342506'
      },
      success: {
        50: ' #eafaf5',
        100: '#aeead6',
        200: '#85e0c2',
        300: '#5dd5ad',
        400: '#34cb99',
        500: '#2aa27a',
        600: '#218262',
        700: '#196149',
        800: '#114131',
        900: '#082018'
      },
      error: {
        50: ' #fbe9ed',
        100: '#f5c2ca',
        200: '#f0a3b0',
        300: '#eb8495',
        400: '#e6657b',
        500: '#D93A5D',
        600: '#cc213e',
        700: '#99192e',
        800: '#66111f',
        900: '#33080f'
      },
      neutral: {
        black: '#000000',
        title: '#19272e',
        text: '#415058',
        light: '#5A6D77',
        lighter: '#6f8590',
        border: '#E6EBEF',
        alt: '#EDF0F3',
        bg: '#F8FAFE',
        white: '#ffffff'
      }
    },
    fontFamily: {
      title: ['Satoshi', 'sans-serif'],
      body: ['Satoshi', 'sans-serif']
    },
    extend: {
      spacing: {
        800: '800px',
        500: '500px',
        350: '350px',
        300: '300px',
        256: '256px',
        200: '200px',
        181: '181px',
        150: '150px',
        147: '147px',
        128: '128px',
        110: '110px',
        96: '96px',
        80: '80px',
        72: '72px',
        64: '64px',
        56: '56px',
        52: '52px',
        48: '48px',
        44: '44px',
        40: '40px',
        36: '36px',
        32: '32px',
        28: '28px',
        24: '24px',
        20: '20px',
        18: '18px',
        16: '16px',
        12: '12px',
        10: '10px',
        8: '8px',
        4: '4px'
      },
      fontSize: {
        10: '10px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        32: '32px',
        24: '24px',
        40: '40px',
        44: '44px'
      }
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/aspect-ratio')]
};
