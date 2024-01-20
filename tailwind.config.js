/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary:
          "radial-gradient(34.98% 34.98% at 50% 50%,#725bda 0,rgba(6,19,45,0) 100%)",
        btn: "linear-gradient(264.28deg,#dec7ff -38.2%,#5c27fe 103.12%)",
      },
    },
  },
  plugins: [],
};
