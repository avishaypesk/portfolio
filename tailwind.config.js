module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#5FB4A2',
        darkcyan: '#57A392',
        darkblue: '#203A4C',
        darkerblue: '#1d3544',
        grayishdarkblue: '#33323D',
        verylightgrey: '#FAFAFA',
        lightgrey: '#E5E3E4',
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
        tight: '-0.45px',
        tighter: '-0.36px',
        tightest: '-0.30px',
      },
    },
  },
  variants: {},
  plugins: [],
};
