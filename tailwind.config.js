/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    screens: {
      'sm': '568px',
      // => @media (min-width: 568px) { phones }
       'md': '768px', 
       // => @media (min-width: 768px) {Tablets }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        'lobster':['"Lobster"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('flowbite/plugin')
  ]
}

