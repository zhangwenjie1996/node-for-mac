var http = require('http');
var users = [];
/**
 * 1.客户端把一个用户信息发送给服务器
 * 2.服务器接收到后追加到users数组里
 * 3.服务器返回users数组，在客户单那里打印出来
 */

/**
 * req 是一个可读流 ondata onend pipe
 * res 是一个可读可写流 ondata onend pipe write end
 */

http.createServer(function (req, res) {
    console.log(req.method);
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.url);
    req.setEncoding('utf8'); //设置编码 把data事件中接收到的data请求数据buffer转换成字符串
    var contentType = req.headers['content-type'];
    // 每次接受到数据 都会触发data事件
    var result = '';
    req.on('data', function (data) {
        console.log(1, data);
        result += data;
    })
    req.on('end', function () {
        var user = '';
        if (contentType == 'application/json') {
            user = JSON.parse(result);
        } else if (contentType == 'application/x-www-form-urlencoded') {
            user = require('querystring').parse(result);
        } else if (contentType == 'application/zwj') {
            // hobby@Watch comic and animation|age@20
            user = require('querystring').parse(result, '|', '@');
        }
        users.push(user);
        res.end(JSON.stringify(users));

    })
    res.setHeader('name', 'zwj'); //自定义头
    res.setHeader('age', '18');
    // res.end('over');
}).listen(8080);