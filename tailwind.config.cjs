/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      inter: ['inter, sans-serif'],
    },
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        show: 'show 0.75s ease-in-out',
      },
    },
  },
  plugins: [],
};