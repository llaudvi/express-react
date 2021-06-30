const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/javascript'),
    filename: 'bundled.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s?css$/i,
        use: [
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, 'node_modules'),
                  path.resolve(
                    __dirname,
                    '@manulife/mux/core/typography/assets/fonts/fonts.css'
                  ),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts/',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: ['node_modules'],
  },
};
