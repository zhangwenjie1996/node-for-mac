var http = require('http');
var fs = require('fs');
var path = require("path");

var server = http.createServer(function (request, response) {
    var url = request.url;
    console.log(url);
    if (url == '/index.html') {
        // 指定文件的路径 设置编码 得到data就是字符串类型的
        response.setHeader('Content-Type', 'text/html;charset=utf-8'); //设置响应头
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function (err, data) {
            response.write(data);
            response.end();
        })
    } else if (url == '/style.css') {
        // 指定文件的路径 设置编码 得到data就是字符串类型的
        response.setHeader('Content-Type', 'text/css;charset=utf-8'); //设置响应头
        fs.readFile(path.join(__dirname, 'style.css'), 'utf8', function (err, data) {
            response.write(data);
            response.end();
        })
    } else if (url == '/index.js') {
        // 指定文件的路径 设置编码 得到data就是字符串类型的
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8'); //设置响应头
        fs.readFile(path.join(__dirname, 'index.js'), 'utf8', function (err, data) {
            response.write(data);
            response.end();
        })
    }


});
server.listen(8888, 'localhost');