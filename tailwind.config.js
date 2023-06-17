/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily:{
            'mint-grotesk': ['Mint Grotesk', 'sans-serif'],
            'mint-grotesk-light': ['Mint Grotesk Light', 'sans-serif'],
        },
        cubicBezier: {
          'custom': 'cubic-bezier(.215, .61, .355, 1)',
        },
        
    },
  },
  plugins: [],
}
