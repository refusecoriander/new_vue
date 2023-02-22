import axios from 'axios'
import { createApp } from 'vue'
// import Vue from 'vue'
import router from './routers'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/web/api',
    // baseURL: 'http://localhost:3000/web/api'
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (config && config.headers && localStorage.token) {
      config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  http.interceptors.response.use(res => {
    return res
  }, err => {
    if (err.response.data.message) {
      createApp.prototype.$message({
        type: 'error',
        message: err.response.data.message
      })
      
      if (err.response.status === 401) {
        router.push('/login')
      }
    }
    
    return Promise.reject(err)
  })

export default http