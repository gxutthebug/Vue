import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net' // 基础路径
})

export default request
