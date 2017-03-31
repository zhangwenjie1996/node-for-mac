var fs = require('fs');
var http = require('http');
var mime = require('mime');
var path = require('path');
// node 亲生的模块，帮助我们解析请求中的url
var url = require('url');
var users;

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
    if (urlObj.pathname == '/') {
        fs.readFile(path.join(__dirname, '8.reg.html'), function (err, data) {
            response.end(data);
        })
    } else if (urlObj.pathname == '/reg') {
        // 每当服务器收到客户端发过来的数据的时候就会触发data事件 (接到的data是buffer，所以要toString（）转成字符串)
        var str = '';
        request.on('data', function (data) {
            // console.log(data,data.toString());
            str += data.toString();
        });
        // 当所有数据全部接受完毕的时候会触发end事件，这时请求体的数据就接受完整了
        request.on('end', function () {
            console.log(str);
            // 转成对象追加到用户列表里
            // users=[];
            // users.push(JSON.parse(str));
            // 返回用户列表
            // response.end(JSON.stringify(users));

            // 或直接返回字符串str
            response.end(str);
        })
    }
})

server.listen(8080, 'localhost');