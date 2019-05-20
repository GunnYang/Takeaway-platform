module.exports = {
    devServer: {
        proxy: {
            // 匹配所有以 '/api'开头的请求路径
            '/api':{       
                // 代理目标的基础路径 
                target: 'http://localhost:4000',
                ws: true,
                // 支持跨域
                changeOrigin: true,
                // 重写路径: 去掉路径中开头的'/api'
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    }
}