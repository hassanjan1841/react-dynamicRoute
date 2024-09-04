/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3B82F6",
          600: "#2563EB",
        },
        gray: {
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
        },
      },
    },
    animation: {
      spin: "spin 1s linear infinite",
    },
  },
  plugins: [],
};
