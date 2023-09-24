/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': 'cursive',
        'arial': 'Arial, Helvetica, sans-serif'
      }
    },

  },
plugins: [require('@tailwindcss/forms')],
}

