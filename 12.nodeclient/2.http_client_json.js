// 不用浏览器，自己建个客户端（运行当前script js时候，别忘了要把服务1.server.js给启动 可在命令行中运行 node 1.server.js启动服务即可）
var http = require('http');
// 指定请求的参数
var options = {
    host: 'localhost',
    port: 8080,
    path: '/post',
    method: 'POST',
    headers: {
        // 'content-Type': 'application/x-www-form-urlencoded',
        'content-Type': 'application/zwj'
    }
}
// 向服务器发送请求
var request = http.request(options, function (res) {
    console.log(res.statusCode); //读取响应
    console.log(res.headers); //读取响应头
    // res.setEncoding('utf8'); //设置编码 
    var result = '';
    res.on('data', function (data) {
        console.log(1, data);
        result += data;
    })
    res.on('end', function () {
        var users = JSON.parse(result);
        console.log(users);
    })
})
// request 也是一个流，是一个可写流
// request.write('{"hobby":"Watch comic and animation"'); //调write写请求体
// request.write(',"age":"20"}'); //调write写请求体
// request.write('hobby=Watch comic and animation&age=20');
// 自定义格式
request.write('hobby@Watch comic and animation|age@20');
request.end(); //当调用end方法的时候请求才会真正发出