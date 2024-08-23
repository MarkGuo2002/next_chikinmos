import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        chikYellow:"#FDE4A2",
        chikCaqui000:"#fcf3e9",
        chikCaqui100:"#EDD6B6",
        chikCaqui200:"#CAB0A1",
        chikCaqui300:"#ABB168",
        chikBrown100:"#7E5330",
        chikBrown200:"#472607",
        chikBrown300:"#4E3135",
        gray100:"#FAFAFA",
        gray200:"#F6F6F6",
        gray300:"#A9A9A9",
      }
    },
  },
  plugins: [],
};
export default config;
