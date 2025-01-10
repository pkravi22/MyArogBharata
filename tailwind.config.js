module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Check your project paths
  theme: {
    extend: {
      borderRadius: {
        button: "12px",
      },
      colors: {
        customBlue: "#0F2C5A",
        coloredButtonBg: "#4CAF50",
        normalButtonBg: "#FFFFFF",
        normalButtonText: "#333333",
        bgBlue:"#EFF8FF"
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        roboto:["Roboto"]
      },
      animation: {
        scroll: "scroll-horizontal 12s ease-out infinite",
      },
      keyframes: {
        "scroll-horizontal": {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        style:{
textCenter:"text-center",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".coloredbutton": {
          backgroundColor: "#FAAF40", // Green background
          color: "#1F1F1F", // White text
          borderRadius: "30px", // Rounded corners
          padding: "0.2rem 1rem", // Padding
          border: "1px solid #FAAF40", // Border
          "&:hover": {
            backgroundColor: "#FAAF40", // Slightly darker on hover
          },
        },
        ".normalbutton": {
          backgroundColor: "#FFFFFF", // White background
          color: "#FAAF40", // Dark text
          borderRadius: "30px", // Rounded corners
          padding: "0.2rem 1rem", // Padding
          border: "1px solid ", // Light gray border
          "&:hover": {
            backgroundColor: "#FFFFFF", // Light gray on hover
          },
        },
      });
    },
  ],
};
