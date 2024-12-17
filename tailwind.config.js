/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        nexus: {
          "primary": "#008cff",
          "secondary": "#00b4ff",
          "accent": "#00e400",
          "neutral": "#0c1013",
          "base-100": "#292929",
          "info": "#00c0ff",
          "success": "#1b8b00",
          "warning": "#ff9c00",
          "error": "#d60037",
        },
      },
    ],
  },
}

