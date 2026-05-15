import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        brand: {
          primary:       "#0F766E",
          primaryHover:  "#115E59",
          primarySoft:   "#CCFBF1",
          primarySofter: "#F0FDFA",
          primaryInk:    "#134E4A",
          accent:        "#0891B2",
        },
      },
    },
  },
  plugins: [],
};

export default config;
