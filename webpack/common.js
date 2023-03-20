/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/no-extraneous-dependencies */
import { resolve, join } from 'path';
import CopyPlugin from 'copy-webpack-plugin';

// eslint-disable-next-line no-underscore-dangle
const __dirname = resolve();

export default {
  entry: {
    index: ['./src/index.tsx'],
  },

  resolve: {
    modules: ['./src', './node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      assets: resolve(__dirname, 'src/assets'),
      components: resolve(__dirname, 'src/components'),
      constants: resolve(__dirname, 'src/constants'),
      hooks: resolve(__dirname, 'src/hooks'),
      pages: resolve(__dirname, 'src/pages'),
      react: join(__dirname, 'node_modules', 'react'),
      interfaces: resolve(__dirname, 'src/interfaces'),
      store: resolve(__dirname, 'src/store'),
      utils: resolve(__dirname, 'src/utils'),
      styles: resolve(__dirname, 'src/styles'),
    },
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: resolve(__dirname, 'src/robots.txt'), to: '' },
        { from: resolve(__dirname, 'src/assets/favicon.ico'), to: '' },
        { from: resolve(__dirname, 'src/assets/_redirects'), to: '' },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [
          join(__dirname, 'src'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve('./tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
