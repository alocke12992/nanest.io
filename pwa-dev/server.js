require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.prod.env' : '.dev.env',
  silent: true
})
const express = require('express')
const proxy = require('http-proxy-middleware')
const path = require('path')
const fallback = require('express-history-api-fallback')
const app = express()

const root = path.resolve(__dirname, 'dist')
app.use('/api', proxy({ target: process.env.API_URL, changeOrigin: true, ws: true, pathRewrite: { '^/api': '' } }))
app.use(express.static(root))
app.use(fallback('index.html', { root }))

app.listen(process.env.PORT, process.env.HOST, err => {
  if (err) {
    console.error(err)
  }
  console.log(`🤪  Listening at http://${process.env.HOST}:${process.env.PORT}`)
})
