module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./navigation/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //if I change something in diff color it doesn't work... ???
    colors: {
      themeColor: "#3B3B3B",
      textDark: "rgb(30, 30,30)",
      textLight: "rgba(252, 246, 242, 1)",
      textLightDark: "#E1E1E1",
      danger: "#DE1C22",
      success: "#008556",
      warning: "#E86825",
      disabled: "#C7C7C7",
      disabledLight: "rgb(220, 220, 220)",
      white: "#FFFFFF",
    },
  },

  // ...
};
