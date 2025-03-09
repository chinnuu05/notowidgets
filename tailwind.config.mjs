/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{tsx,css,ts,js,jsx}',
    './src/components/**/*.{tsx,css,ts,js,jsx}',

  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], 
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
      colors: {

        

        'theme-color': '#ffb263',
        'mantine-border': '#e5e7eb',
        'hero-border': '#f2f2f25b',
        'mantine-dark-50': '#c9c9c9',
        'mantine-dark-100': '#b8b8b8',
        'mantine-dark-200': '#828282',
        'mantine-dark-300': '#696969',
        'mantine-dark-400': '#424242',
        'mantine-dark-500': '#3b3b3b',
        'mantine-dark-600': '#2e2e2e',
        'mantine-dark-700': '#242424',
        'mantine-dark-800': '#1f1f1f',
        'mantine-dark-900': '#141414',
        
        'mantine-gray-0': '#f8f9fa',
        'mantine-gray-50': '#f8f9fa',
        'mantine-gray-100': '#f1f3f5',
        'mantine-gray-200': '#e9ecef',
        'mantine-gray-300': '#dee2e6',
        'mantine-gray-400': '#ced4da',
        'mantine-gray-500': '#adb5bd',
        'mantine-gray-600': '#868e96',
        'mantine-gray-700': '#495057',
        'mantine-gray-800': '#343a40',
        'mantine-gray-900': '#212529',


      },
    },
  },

}
