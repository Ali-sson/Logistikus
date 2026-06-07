/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      primary: "#0A3D78",  // Navbar, Button Hover,
      secondary: "#1E88E5", // Primary Buttons
      accent: "#4FC3F7",
      soft: "#F8FAFC",     // Body Background
      dark: "#1F2937",     // Heading 
      grayish: "#8A8F98", //Paragraphs
    },
  },
},
  plugins: [],
}

// Professional Color Distribution
// Element	Color
// Body Background	#F8FAFC
// Navbar	#0A3D78
// Hero Gradient	#0A3D78 → #1E88E5
// Headings	#1F2937
// Paragraphs	#8A8F98
// Primary Buttons	#1E88E5
// Button Hover	#0A3D78
// Accent Highlights	#4FC3F7
// Cards	#FFFFFF
// Footer	#1F2937
// Footer Hover	#4FC3F7
