const theme = require("@breadchain.xyz/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "../../packages/site-ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "card-pattern-1": "url('/img/infocard-bg-1.svg')",
        "card-pattern-2": "url('/img/infocard-bg-2.svg')",
        "card-pattern-3": "url('/img/infocard-bg-3.svg')",
      },
      ...theme,
    },
  },
  plugins: [],
};
