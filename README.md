# Micro Frontend Poc

The purpose of this project is to play around with micro frontend using webpack's 5 module federation plugin

## The Gist

### Container
>webpack.config.js
```javascript
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap',
      },
      shared: ['faker'],
    }),
```