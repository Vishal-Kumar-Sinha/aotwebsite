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
        blob: {
          "0": {
            transform: "translate(0px, 0px) scale(0.9)"
          },
          "33%": {
            transform: "translate(20px, -40px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.7)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(0.9)"
          },
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
        'blob': 'blob 10s infinite',
      },
    },
    boxShadow: {
      'outside-shadow': "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)",
      'inside-shadow': "inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)",
      'cube-shadow': "0px 0px 52px #fff",
      'news-shadow': "0 -2px 12px rgba(0,0,0,0.3)",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      footerxl: { max: "1439px" },
      // => @media (max-width: 1439px) { ... }

      footerxll: { min: "1439px" },
      // => @media (min-width: 1439px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      gxl: { max: "1139px" },
      // => @media (max-width: 113px) { ... }

      ggxl: { min: "1139px" },
      // => @media (min-width: 1139px) { ... }

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

      smy: { min: "685px" },
      // => @media (min-width: 685px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      smm: { min: "639px" },
      // => @media (min-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }

      xss: { max: "400px" },
      // => @media (max-width: 479px) { ... }

      xxs: { max: "300px" },
      // => @media (max-width: 300px) { ... }
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
    plugin(function({ addUtilities }) {
      const newUtilities = {
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
          'background-color': 'rgb(229 231 235)',
        },
        '.head:hover > .nvbtn .nvlogo': {
          'transform': 'rotatez(-180deg)',
        },
        '*': {
        'box-sizing': 'border-box',
        },
        '.scrlbr::-webkit-scrollbar': {
          'width': '10px',
        },
        '.scrlbr::-webkit-scrollbar-track': {
          'background': '#fff',
          'border-radius': '10px',
          'box-shadow': 'inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)',
        },
        '.scrlbr::-webkit-scrollbar-thumb': {
          'background-color': 'rgb(241,48,36)',
          'border-radius': '10px',
          'border': '3px solid white',
          'box-shadow': 'inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)',
        },
        '.slide3d': {
          'transform':'scale(0.2)',// rotateY(35deg) translateX(-100%)
          'transition':'transform 300ms',
          'opacity':'0.5',
        },
        '.activeSlide3d': {
          'transform':'scale(1.1)',
          'opacity':'1',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    })
  ],
}

