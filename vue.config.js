module.exports = {
    devServer: {
        open: true, // 配置自动启动浏览器
        // 设置代理 devServer.proxy 可以是一个指向开发环境 API 服务器的字符串
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000', //对应自己的接口
                changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL
                ws: true, //是否代理 websockets
                secure: false,  // 如果是https接口，需要配置这个参数
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // 本地访问 http://localhost:8080
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    }
};
