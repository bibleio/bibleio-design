/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("./src/tailwind-theme.ts")],
};