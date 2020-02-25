const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');


const PATHS = {
  src: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../build'),
  assets: './assets',
}

module.exports = {

  externals: {
    paths: PATHS
  },
  entry: {
    // app: './src/index.js',
    app: PATHS.src,
  },
  output: {
    // filename: `${PATHS.assets}/js/[name].js`,
    filename: `js/[name].js`,
    path: PATHS.build,
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loader: {
          scss: 'vue-style-loader!css-loader'
        }
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          }
        },
      ]
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue',
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: `${PATHS.assets}/css/[name].css`,
      filename: `css/[name].css`,
    }),
    new CopyWebpackPlugin([{
        from: `${PATHS.src}/img/`,
        to: `img`
      },
      {
        from: `${PATHS.src}/static/`,
        to: ``
      },
    ]),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html'
    }),
    new VueLoaderPlugin(),
  ],
}
