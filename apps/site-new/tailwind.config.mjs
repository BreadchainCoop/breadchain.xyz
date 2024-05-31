const theme = require("@breadchain.xyz/theme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "card-pattern-1": "url('/img/infocard-bg-1.svg')",
        "card-pattern-2": "url('/img/infocard-bg-2.svg')",
        "card-pattern-3": "url('/img/infocard-bg-3.svg')",
      },
      gridTemplateColumns: {
        "infocards-sm": "2.5rem auto 2.5rem",
        "infocards-md":
          "2.5rem minmax(0, 1fr) 2.5rem minmax(0, 1fr) 2.5rem minmax(0, 1fr) 2.5rem",
      },
      gridTemplateRows: {
        "infocards-sm": "auto auto auto",
        "infocards-md": "2.5rem auto 2.5rem 14rem",
      },
      ...theme,
    },
  },
  plugins: [],
};
