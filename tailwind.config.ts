import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(home)/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    colors: {
      'white':'#FFFFFF',
      'neon-green': '#04fa9a',
      'darkneon-green': '#14bc79',
      'bright-dark':'#30343a',
      'dark-theme':'#1A1820',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
export default config;
