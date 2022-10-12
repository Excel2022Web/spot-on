/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'phases-back': "url('/assets/phases.svg')",
      }

    },
  },
  plugins: [],
}
