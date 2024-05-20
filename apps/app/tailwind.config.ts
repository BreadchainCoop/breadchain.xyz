import type { Config } from "tailwindcss";
import breadchainTheme from "@breadchain.xyz/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...breadchainTheme,
  },
  plugins: [],
};

export default config;
