var path = require("path");

module.exports = {
  entry: "./frontend/distro.jsx",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts')
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  watchOptions: {
    // poll: 1000, // Check for changes every second
  },
  // stats: "normal"
};
