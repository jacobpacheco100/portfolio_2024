/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        light_gray: '#e6e6e6',
        dark_gray: '#707070',
        body: '#AEAEAE',
        black: '#000',
        primary: '#6832FF',
        secondary: '#FF4C00',
      },
      screens: {
        tablet: '768px',
        medium: '1024px',
        desktop: '1280px',
      },
      fontFamily: {
        sans: ['var(--font-myfont)'],
      },
      backgroundImage: {
        hero_bg: "url('/public/img/mesh.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        sm: '0px 0px 3.5px rgba(255, 255, 255, 0.25)',
        lg: '0px 0px 13px rgba(255, 255, 255, 0.35)',
      },
      boxShadow: {
        contact: '0px 4px 24px -1px rgba(0, 0, 0, 0.2)]',
      },
    },
  },
  plugins: [],
}
