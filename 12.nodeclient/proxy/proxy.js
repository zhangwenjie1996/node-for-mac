var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var bodyParser = require('./bodyParser');
var proxy = require('./request');
var users = [];
var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
    } else if (req.url == '/reg') {
        // 中间做个代理 向9090发请求，得到9090响应再传递给客户端
        /**
         * 1. 获取请求里的请求体
         * 2. 构建一个指向9090的请求，把请求体传递过去
         * 3. 得到9090的响应，然后再传递给客户端
         */
        bodyParser(req, function (result) {
            // 指定请求的参数
            proxy({
                host: 'localhost',
                port: 8080,
                path: '/post',
                method: 'POST'
            }, result, function (response) {
                res.end(response);
            })
        })
    }
}).listen(9090);