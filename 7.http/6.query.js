var fs = require('fs');
var http = require('http');
var mime = require('mime');
var path = require('path');
// node 亲生的模块，帮助我们解析请求中的url
var url = require('url');

var server = http.createServer(function (request, response) {
    // 把url转成url对象
    var urlObj = url.parse(request.url, true); //加true，把请求url中query由字符串变为对象类型
    console.log(urlObj);
    response.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    if (url.pathname == '/favicon.ico') {
        return response.end('404');
    }
    // pathname 指的是路径名 问号和端口号中间的部分
    if (urlObj.pathname == '/apple') {
        // query查询字符串，true，则转成对象
        response.end(urlObj.query.num + '个苹果');
    }
})

server.listen(8080, 'localhost');