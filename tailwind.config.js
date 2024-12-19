/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        OrbyDark: {
          "primary": "#0487D9",
          "primary-content": "#F8F8F8",
          "secondary": "#55BAFA",
          "secondary-content": "#F8F8F8",
          "accent": "#006AAC",
          "accent-content": "#F8F8F8",
          "info": "#3EAFF6",
          "info-content": "#F8F8F8",
          "success": "#34CB71",
          "success-content": "#F8F8F8",
          "warning": "#D8D803",
          "warning-content": "#565656",
          "error": "#F9505A",
          "error-content": "#F8F8F8",
          "neutral": "#999999",
          "neutral-content": "#F8F8F8",
          "base-100": "#282A3A",
          "base-200": "#212331",
          "base-300": "#1B1C28",
          "base-content": "#F8F8F8",
        },
        OrbyLight: {
          "primary": "#0487D9",
          "primary-content": "#F8F8F8",
          "secondary": "#55BAFA",
          "secondary-content": "#F8F8F8",
          "accent": "#006AAC",
          "accent-content": "#F8F8F8",
          "info": "#3EAFF6",
          "info-content": "#F8F8F8",
          "success": "#34CB71",
          "success-content": "#F8F8F8",
          "warning": "#D8D803",
          "warning-content": "#565656",
          "error": "#F9505A",
          "error-content": "#F8F8F8",
          "neutral": "#565656",
          "neutral-content": "#F8F8F8",
          "base-100": "#F8F8F8",
          "base-200": "#EBEBEB",
          "base-300": "#D9D9D9",
          "base-content": "#565656",
        },
      },
    ],
  },
}

