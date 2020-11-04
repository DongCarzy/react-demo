# REACT

## 路由

pc采用 react-route-dom, 而app开发采用  react-router-native

## http

axios

## 状态容器

Redux 是 JavaScript 状态容器，提供可预测化的状态管理. `vue` 中则是 `vuex`.

- redux               核心库,数据存储,共享
- react-redux         针对react. 通过Context让各个子组件拿到store中的数据. 控制数据的可见性
- redux-thunk         异步操作库
- react-router-redux  把react-router自己维护的状态，例如location、history、path等等，也交给redux管理

## HTTP代理

安装 `http-proxy-middleware` 代理模块， 田添加 `setupProxy.js`

``` js
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    // /api 表示代理路径
    // target 表示目标服务器的地址
    createProxyMiddleware('/api', {
      // http://localhost:4000/ 地址只是示例，实际地址以项目为准
      target: 'http://localhost:8080',
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      // 重写接口路由
      pathRewrite: {
        '^/api': '/api' // 这样处理后，最终得到的接口路径为： http://localhost:8080/api/xxx
      }
    })
  )
}
```
