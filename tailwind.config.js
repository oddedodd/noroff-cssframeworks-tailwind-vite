/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts}", "!./node_modules/**/*"],
  theme: {
    fontSize: {
      xs: "0.7rem", // Changing the default 'xs' size from 0.75rem to 0.7rem for smaller text
      sm: "0.9rem", // Adjusting the 'sm' size for slightly larger small text
      lg: "1.3rem", // Enlarging the 'lg' size to match the desired heading scale
      xl: "1.5rem", // Making 'xl' font size larger for better readability in large headings
      tiny: "0.625rem", // Custom size for very small text (10px)
      huge: "3.5rem", // Custom size for large headings (56px)
      massive: "5rem", // Extra-large font size for hero sections (80px)
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // Custom font for headings
        body: ["Inter", "sans-serif"], // Custom font for body text
      },
      colors: {
        brand: {
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#2196F3", // Default brand colour
          600: "#1E88E5",
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1", // Dark brand colour
        },
        accent: {
          light: "#FCD34D", // Light accent colour (yellow)
          DEFAULT: "#FBBF24", // Default accent colour
          dark: "#B45309", // Darker accent colour
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "selector",
};
