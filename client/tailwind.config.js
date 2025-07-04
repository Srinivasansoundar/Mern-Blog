/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js",
    // 'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),


  ],
  theme: {
    extend: {},
  },
  plugins: [ flowbite.plugin(), require('tailwind-scrollbar')],
}