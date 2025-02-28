import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--color-main)",
        "dark-1": "var(--color-dark-1)",
        "dark-2": "var(--color-dark-2)",
        "dark-3": "var(--color-dark-3)",
        "light-1": "var(--color-light-1)",
        "light-2": "var(--color-light-2)",
        "light-3": "var(--color-light-3)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        red: "var(--color-red)",
        yellow: "var(--color-yellow)",
        green: "var(--color-green)",
        base: "var(--color-text-base)",
      },
      fontSize: {
        "2xs": [
          "0.625rem",
          {
            lineHeight: "0.75rem",
          },
        ],
        "3xs": [
          "0.5rem",
          {
            lineHeight: "0.625rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
