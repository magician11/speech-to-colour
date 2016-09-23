const webpackConfig = {
  entry: './src/index.jsx',
  output: {
    path: 'dist',
    filename: 'speech-to-colours.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react'] } },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

module.exports = webpackConfig;
