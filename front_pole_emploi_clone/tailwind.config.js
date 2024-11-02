/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "fade-to-top":
          "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
