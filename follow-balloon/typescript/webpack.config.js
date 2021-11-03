const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/main.ts',
  output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js'
	},
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: false,
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
	devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    open: true
	}
};