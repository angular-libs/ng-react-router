/* global __dirname, require, module*/

const config = {
  entry: {
    boot: __dirname + '/index.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename:'ng-react-router.js',
    library: ['ngReactRouter'],
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  externals: [{
    react: 'React',
    'react-dom': 'react-dom',
    lodash:'lodash',
    angular:"angular"
  }],
};

module.exports = config;
