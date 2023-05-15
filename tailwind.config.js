/** @type {import('tailwindcss').Config} */
import {fontFamily } from "tailwindcss/defaultTheme";


export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      fontFamily: {
        sans: ["var(--font-expletus)"],
      },
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },

  animation: {
    shine: "shine 1s",
  },
  keyframes: {
    shine: {
      "100%": { left: "125%" },
    },
  },
  
  },
};
export const plugins = [];
