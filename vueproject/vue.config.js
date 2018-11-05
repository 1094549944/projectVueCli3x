/*
 * @Author: jiaxinying 
 * @Date: 2018-11-05 19:04:22 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-11-05 19:14:23
 */

/**
 * 
 * 判断是正式环境还是开发环境 
 * process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'
 * 正式环境 '/iview-admin'
 * 开发环境 '/'
 */


const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'

// 引入node path 模块,用来加载路径，解决不同系统的文件引入路径
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve, alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  //打包时不生成.map 文件，这样在打包的时候，会减小打包的体积，并加快打包速度
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
  }
}