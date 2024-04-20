/** @type {import('tailwindcss').Config} */

const { transform } = require('next/dist/build/swc')
const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinner: {
          from: {
            transform: 'rotateY(0deg) rotateX(0deg)'
          },
          to: {
            transform: 'rotateY(359deg) rotateX(359deg)'
          }
        },
        
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        primar: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        cubecol: '#111',
      },
      backgroundImage: {
        site: 'url("/public/images/fdb8.png")',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spinner-cube': 'spinner 10s linear infinite',
      },
    },
    boxShadow: {
      'outside-shadow': "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)",
      'inside-shadow': "inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)",
      //'cube-shadow': "0px 0px 52px rgba(0,0,0,0.9)",
      'cube-shadow': "0px 0px 52px #59f",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      gxl: { max: "1139px" },
      // => @media (max-width: 1279px) { ... }

      xll: { min: "1279px" },
      // => @media (min-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      llg: { min: "1023px" },
      // => @media (min-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      mmd: { min: "767px" },
      // => @media (min-width: 767px) { ... }
      
      smmy: { max: "685px" },
      // => @media (max-width: 685px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      smm: { min: "639px" },
      // => @media (min-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }

      xxs: { max: "300px" },
      // => @media (max-width: 300px) { ... }
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.circular-progress': {
            'fill': 'none',
            'stroke-width': '18px',
            'stroke-dasharray': '472',
            'stroke-dashoffset': '100',
        },
        '.ifcs': {
          'background-position': 'center',
          'background-size': 'cover',
          'opacity': '1',
          'box-shadow': '0px 0px 0px #fff',
        },
        '.ifc': {
          'transform': 'translate3d(0,0,0px)',
        },
        '.ifc2': {
          'transform': 'rotateY(90deg) translate3d(0,0,0px)',
        },
        '.ifc3': {
          'transform': 'rotateX(90deg) translate3d(0,0,0px)',
        },
        '.front': {
          'transform': 'translate3d(0,0,40px)',
          'transition': '2s',
        },
        '.back': {
          'transform': 'rotateY(180deg) translate3d(0,0,40px)',
        },
        '.left': {
          'transform': 'rotateY(-90deg) translate3d(0,0,40px)',
        },
        '.right': {
          'transform': 'rotateY(90deg) translate3d(0,0,40px)',
        },
        '.top': {
          'transform': 'rotateX(90deg) translate3d(0,0,40px)',
        },
        '.bottom': {
          'transform': 'rotateX(-90deg) translate3d(0,0,40px)',
        },
        '.str-dasharray': {
          'stroke-dasharray': '472',
        },
        '.str-dashoffset': {
          'stroke-dashoffset': '300',
        },
        '.cls-1': {
          'fill':'hsl(232,47%,28%)',
          'stroke-width': '0px',
        },
        '.oofaot':{
          'transform': 'rotatez(0deg)',
          'transition-property': 'transform',
          'transition-duration':'2.5s',
          'transform-origin':'53% 50%',
        },
        '.aotlogo:hover>.oofaot': {
          'transform': 'rotatez(135deg)',
        },
        '.head > .tail': {
          'transform': 'translatex(100%) scale(0)',
        },
        '.head:hover > .tail': {
          'transform': 'translatex(101%) scale(1)',
        },
        '.nvbtn > .nvlogo': {
          'transform': 'rotatez(0deg)',
        },
        '.tail > .nvli:hover': {
          'background-color': '#C0C2C9',
        },
        '.head:hover > .nvbtn .nvlogo': {
          'transform': 'rotatez(-180deg)',
        },
        '*': {
        'box-sizing': 'border-box',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    })
  ],
}

