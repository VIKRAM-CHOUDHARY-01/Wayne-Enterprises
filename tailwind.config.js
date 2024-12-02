/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        "sm-max": { max: "790px" }, // Define a custom max-width breakpoint
        "custom-range": { min: "768px", max: "1200px" },
      },
      colors: {
        batmanBg: "rgb(25, 29, 34)", // Add a custom name for your color
        batmanRed: "rgb(185,11,12)",
        faqColour: "#8dc6ff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins as a custom font
        bangers: ["Bangers", "cursive"], // Add Bangers as a custom font
      },
      boxShadow: {
        white: "0 4px 6px rgba(255, 255, 255, 0.5)",
        red: "0 4px 6px rgba(215, 4, 4, 0.5)",
        faq: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        "custom-inset":
          "rgba(0, 0, 0, 0.0) 0px -23px 25px 16px inset, rgba(0, 0, 0, 0.0) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.6) 0px -79px 45px 0px inset, rgba(0, 0, 0, 0) 0px 2px 1px 0px, rgba(0, 0, 0, 0.0) 0px 4px 2px 0px, rgba(0, 0, 0, 0.0) 0px 8px 4px 0px, rgba(0, 0, 0, 0.0) 0px 16px 8px 0px, rgba(0, 0, 0, 0.0) 0px 32px 16px 0px",
      },

      gap: {
        "6p": "6%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  corePlugins: {
    scrollbar: true,
  },
};
