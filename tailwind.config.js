/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        geistmono: ["Geist Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
