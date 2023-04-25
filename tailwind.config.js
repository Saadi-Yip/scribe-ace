/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "16px",
      md: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": ["30px", "39.06px"],
      "3xl": ["40px", "52.08px"],
      "4xl": ["50px", "65.1px"],
      "5xl": ["60px", "67.5px"],
    },
    extend: {
      colors: {
        "color-primary": "#2E35FF",
        "color-secondary": "#fff",
        "color-third": "#60E1CB",
        "color-fourth": "#000000",
        "color-fifth": "#3B3B3B",
        "color-sixth": "#60E1CB"
      },
      backgroundImage: {
        'hero-img': "url('/hero-bg.png')", 
      }
    },
  },
  plugins: [],
};
