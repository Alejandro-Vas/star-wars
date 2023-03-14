/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { resolve, join } from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './common.js';

// eslint-disable-next-line no-underscore-dangle
const __dirname = resolve();

export default merge(common, {
  mode: 'production',
  optimization: {
    usedExports: true,
  },

  output: {
    path: join(__dirname, 'build'),
    publicPath: '/',
    filename: (src) => `${src.runtime}.${src.chunk.contentHash.javascript}.js`,
    sourceMapFilename: '[file].map',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'src/index.html'),
      minify: true,
    }),
  ],

});
