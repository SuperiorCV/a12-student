import axios from 'axios'
// 读取所欲模块内部定义的请求方法

import * as welcome from './welcome.js'
import * as homepage from './homepage.js'
import * as message from './message.js'
import * as myinfo from './myinfo.js'
import * as exam from './exam.js'
import * as waiting from './waiting.js'
import * as testing from './testing.js'
import * as record from './record.js'
import * as wrong from './wrong.js'
import * as result from './result.js'
// axios.defaults=
axios.defaults.baseURL = 'https://sexam.api.cheeseburgerim.space/';
axios.defaults.timeout = 90000;

// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(function (config) {

  // config.headers['Content-Type'] = "multipart/form-data"
  // 
  let token = sessionStorage.getItem("token");

  if (token) {
    //将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.token = token;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axios.interceptors.response.use(
  res => {
    return Promise.resolve(res)
  },
  error => {
    ElementUI.Notification({
      title: '警告',
      message: '服务器崩溃了~后台小哥哥正在紧急修复中！',
      type: 'error'
    });
    return Promise.reject(error)
  }
)
// 暴露给外部以便调用，此时所有的api方法整合到了一起形成一个对象命名为apis
const apis = {
  welcome,
  homepage,
  message,
  myinfo,
  exam,
  waiting,
  testing,
  record,
  wrong,
  result
}
export default apis
