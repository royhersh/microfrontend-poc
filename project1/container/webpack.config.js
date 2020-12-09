const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080
  },
  plugins: [

    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://mf-poc-products.surge.sh/remoteEntry.js',
        cart: 'cart@http://mf-poc-cart.surge.sh/remoteEntry.js',
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}