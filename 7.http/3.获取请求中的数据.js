var http = require('http');
var server = http.createServer(function (request, response) {
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    response.statusCode = 404; //设置响应码
    // Error: Can't set headers after they are sent.
    // 在响应头发出以后不能再发送响应头 所以要先设置头在设置体 设置相应头在发响应体之前
    response.setHeader('Content-Type', 'text/html;charset=utf-8'); //设置响应头
    response.write('hello'); //写的响应体,在调用第一次write的时候，会发送响应头和第一个write的内容
    setTimeout(function () {
        response.write('world');
        response.end('over');
    }, 2000);

});
server.listen(8888, 'localhost');