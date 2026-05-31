/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      primary: "#0A3D78",
      secondary: "#1E88E5",
      accent: "#4FC3F7",
      soft: "#F8FAFC",
      dark: "#1F2937",
      grayish: "#8A8F98",
    },
  },
},
  plugins: [],
}

// // | Element          | Color     |
// | ---------------- | --------- |
// | Background       | `#F8FAFC` |
// | Navbar           | White     |
// | Primary Text     | `#1F2937` |
// | Main Brand Color | `#0A3D78` |
// | Buttons          | `#1E88E5` |
// | Hover Effects    | `#4FC3F7` |
// | Borders          | `#E5E7EB` |
