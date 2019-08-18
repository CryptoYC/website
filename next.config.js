const withStylus = require('@zeit/next-stylus')
const path=require('path')

module.exports = withStylus({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    config.resolve={
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        root: path.resolve(__dirname, './') ,
        style: path.resolve(__dirname, './style/') ,
        c:path.resolve(__dirname, './components/')
      }
    }
    return config
  }
})
