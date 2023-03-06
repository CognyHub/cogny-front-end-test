/* eslint-disable no-underscore-dangle */
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const BrowserifyFS = require('browserify-fs');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new Dotenv({
      path: './.env',
    }),
  ],
  node: {
    fs: 'empty',
  },
  // Adiciona o plugin browserify-fs para usar o módulo fs em memória
  // em vez do módulo fs padrão
  // Isso é necessário porque o pacote dotenv usa o módulo fs internamente
  // em vez de usar variáveis de ambiente padrão
  // Usando o módulo fs em memória, evitamos os erros de 'fs not found'
  // que ocorrem no ambiente do navegador
  devServer: {
    setup(app) {
      app.use((req, res, next) => {
        const fs = new BrowserifyFS();
        req.fs = fs;
        next();
      });
    },
    after(app) {
      const { handle: { req: handleReq } } = app._router.stack[0];
      const { fs } = handleReq;
      app.get('/.env', (req, res) => {
        const envFile = fs.readFileSync('./.env', 'utf-8');
        res.send(envFile);
      });
    },
  },
};
