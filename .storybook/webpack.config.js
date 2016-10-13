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
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: cssLoaders.join('!'),
        includes: [PATHS.src, PATHS.node_modules],
      },
      {
        test: /\.svg$/,
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react',
      },
    ],
  },
};

module.exports = config;
