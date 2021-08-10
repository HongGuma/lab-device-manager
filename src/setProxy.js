const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3102',
            changeOrigin: true,
            ws: true
        }),
        '/php/api',
        createProxyMiddleware({
            target: 'http://127.0.0.1:2306',
        })
    );
};