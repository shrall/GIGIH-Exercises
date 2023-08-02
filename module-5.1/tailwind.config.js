/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "spotify-black": "#191414",
        "spotify-white": "#ffffff",
        "spotify-green": "#1db954",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
