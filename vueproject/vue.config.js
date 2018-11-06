/*
 * @Author: jiaxinying 
 * @Date: 2018-11-05 19:04:22 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-11-06 17:30:22
 */

/**
 * 
 * 判断是正式环境还是开发环境 
 * process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'
 * 正式环境 '/iview-admin'
 * 开发环境 '/'
 */

const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    // proxy: 'http://localhost:3000'
  }
}