/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Noto": ['Noto', 'sans-serif']
      },
      colors: {
        'et-light-skin1': '#e5c7ad',
        'et-gray': '#c2baaf',
        'et-pink': '#d9bbb3',
        'et-yellow': '#d4b78d',
        'et-light-orange': '#cc997a',
        'et-sage-green': '#d0d8c1',
        'et-dark-green': '#8e9b89',
        'et-brown': '#8e9b89',
        'et-pale-pink': '#efe7e4',
        'et-yellow-green': '#bdab6d',
        'et-green-blue': '#88988e',
        'et-gray-blue': '#7e94a1',
        'et-dark-blue': '#3d4b65',
        'et-green': '#92a087',
        'et-light-skin': '#ebd7c6',
        'et-light-gray': '#e9e4e1',
        'et-lavender': '#e5dbe4',
        'et-dark-purple': '#c6bcc5',
      }
    },
  },
  plugins: [],
}

