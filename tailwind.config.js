import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '128': '41.8rem',
        '228': '82%'
      },
      colors: {
        'primary': '#0b0c10',
        'secondary': '#1f2833',
        'tertiary': '#c5c6c7',
        'quaternary': '#66fcf1',
        'quinary': '#45a29e',
        'senary': '#5bc0be',
        'septenary': '#1f2833',
        'octonary': '#0b0c10',
        'nonary': '#66fcf1',
        'denary': '#c5c6c7',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
