module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:7001/',
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}
