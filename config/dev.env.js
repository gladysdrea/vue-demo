'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./test.env')
// 合并测试上的，不用写东西
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
