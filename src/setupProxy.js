const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/config/api/',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/config/api/': '/config/api/'
      }
    })
  );
};

// module.exports = function (app) {
//   app.use(
//     '/api',    // /api 表示代理路径
//     createProxyMiddleware({
//       target: 'http://localhost:8080',    // http://localhost:4000/ 地址只是示例，实际地址以项目为准
//       changeOrigin: true,  // 跨域时一般都设置该值 为 true
//       pathRewrite: {
//         '^/api': '/api' // 这样处理后，最终得到的接口路径为： http://localhost:8080/api/xxx
//       }
//     })
//   );
// };
