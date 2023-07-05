module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#5FB4A2',
        darkblue: '#203A4C',
        grayishdarkblue: '#33323D',
        verylightgrey: '#FAFAFA',
        lightgrey: '#EAEAEB',
        brightred: '#F43030',
      },
      fontFamily: {
        'ibarra-real-nova': ['Ibarra Real Nova', 'sans-serif'],
        'public-sans': ['Public Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': '50px',
        'h2': '40px',
        'h3': '32px',
        'body1': '16px',
        'body2': '15px',
      },
      lineHeight: {
        '50px': '50px',
        '42px': '42px',
        '36px': '36px',
        '30px': '30px',
      },
      letterSpacing: {
        '-0.45': '-0.45em',
        '-0.36': '-0.36em',
        '-0.29': '-0.29em',
      },
    },
  },
  variants: {},
  plugins: [],
};
