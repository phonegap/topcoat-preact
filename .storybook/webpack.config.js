const path = require('path');

const PATHS = {
  src: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../www'),
};

const cssLoaders = [
  'style-loader',
  'css-loader?url=false',
];

const config = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: cssLoaders.join('!'),
        includes: [PATHS.src, PATHS.node_modules],
      },
    ],
  },
};

module.exports = config;
