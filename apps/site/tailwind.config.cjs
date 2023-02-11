const theme = require("@breadchain.xyz/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "../../packages/site-ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
};
