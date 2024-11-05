/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 4px 2px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "fade-to-top":
          "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
      },
    },
  },
  plugins: [],
};
