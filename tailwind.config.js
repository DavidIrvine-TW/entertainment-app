/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'red'       : 'hsl(0, 97%, 63%)',
        'darkblue'  : 'hsl(223, 30%, 9%)',
        'navyblue'  : 'hsl(223, 36%, 14%)',
        'lightblue' : 'hsl(223, 23%, 46%)',
        'white'     : 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        outfit : ['Outfit', 'sans-serif']
      },
      fontSize: {
        'head-l': ['2rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.5px',
          fontWeight: '300',
        }],
        'head-m': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.5px',
          fontWeight: '300',
        }],
        'head-s': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.5px',
          fontWeight: '500',
        }],
        'head-xs': ['1.125rem', {
          lineHeight: '1.5rem',
          letterSpacing: '-0.5px',
          fontWeight: '500',
        }],
        'body-s': ['0.8125rem', {
          lineHeight: '1rem',
          letterSpacing: '0px',
          fontWeight: '300',
        }],
        'body-m': ['0.9375rem', {
          lineHeight: '1.1875rem',
          letterSpacing: '0px',
          fontWeight: '300',
        }],
      },
      fontWeight : {
        reg: '300',
        bold : '500'
      }
    },
  },
  plugins: [],
}

