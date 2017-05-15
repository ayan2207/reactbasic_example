import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'

const nodeEnv = process.env.NODE_ENV || 'development'
const isProd = nodeEnv === 'production'

export default {
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    'webpack/hot/dev-server',
    'react-hot-loader/patch',
    './main.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0'
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'babel-loader!ts-loader'
      },
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      // }
    ]
  },
  postcss: [autoprefixer],
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules')
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.NamedModulesPlugin()
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // })
  ]
}
