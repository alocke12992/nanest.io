require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.prod.env' : '.dev.env',
  silent: true
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.API_URL,
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  pwa: {
    workboxOptions: {
      ignoreUrlParametersMatching: [/api/]
    }
  }
}
