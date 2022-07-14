const withImages = require('next-images')
// 图片url的cdn支持
// const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages({
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
})
