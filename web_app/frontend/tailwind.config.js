/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "IBM": ['IBM Plex Sans Thai Looped', 'sans-serif']
      },
      colors: {
        'cream-50': '#f9f7f1',
        'light-brown': '#d7c6a6',
        'dark-brown': '#5B3A29',
        'et-light-skin1': '#e5c7ad',
        'et-gray': '#c2baaf',
        'et-pink': '#d9bbb3',
        'et-yellow': '#efe5c1',
        'et-light-orange': '#cc997a',
        'et-sage-green': '#d0d8c1',
        'et-dark-green': '#8e9b89',
        'et-brown': '#7f6269',
        'et-pale-pink': '#efe7e4',
        'et-yellow-green': '#bdab6d',
        'et-green-blue': '#88988e',
        'et-gray-blue': '#7e94a1',
        'et-dark-blue': '#3d4b65',
        'et-green': '#92a087',
        'et-light-skin': '#ebd7c6',
        'et-light-gray': '#e9e4e1',
        'et-lavender': '#d7c9db',
        'et-dark-purple': '#baa7bf',
        'et-light-blue': '#c5d4e3',
        'et-gray-brown': '#B6A89F',
        'et-purple-gray': '#C6B3AE',
        'et-olive-brown': '#7d7263'
      }
    },
  },
  plugins: [],
}

