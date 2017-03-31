var http = require('http');
var fs = require('fs');
var path = require("path");
var mime = require('mime');
// var mime={
//     '.html':'text/html',
//     '.css':'text/css',
//     '.js':'text/javascript'
// }

var server = http.createServer(function (request, response) {
    var url = request.url;
    if (url == '/favicon.ico') {
        return response.end('404');
    }
    if (url == '/') {
        url = '/index.html';
    }
    console.log(path.extname(url), path.join(__dirname, url));
    // 指定文件的路径 设置编码 得到data就是字符串类型的
    // response.setHeader('Content-Type', mime[path.extname(url)]+';charset=utf-8'); //设置响应头
    response.setHeader('Content-Type', mime.lookup(url) + ';charset=utf-8'); //设置响应头
    fs.exists(path.join(__dirname, url), function (exists) {
        if (exists) {
            fs.readFile(path.join(__dirname, url), 'utf8', function (err, data) {
                if (err) {
                    response.statusCode = 404;
                    return;
                }
                response.write(data);
                response.end();
            })
        }
    })

});

server.listen(8888, 'localhost');