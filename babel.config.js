module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["tailwindcss-react-native/babel", { allowModuleTransform: ["moti"] }],
    ],
    //  plugins: [
    //      [
    //       "tailwindcss-react-native/babel"
    //       { blockModuleTransform: ["react-select"] }
    //      ]
    //    ],
  };
};
