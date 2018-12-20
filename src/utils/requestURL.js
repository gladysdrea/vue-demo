import Axios from 'axios'
import Vue from 'vue'

var $http = Axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': 'application/json'
  }
})

Axios.defaults.withCredentials = true // 请求是携带cookie

Object.defineProperty(Vue.prototype, '$http', {
  value: $http
})
