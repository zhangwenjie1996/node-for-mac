// 导入核心模块http
var http = require('http');
/**
 * 1，能在特定的IP 特定端口上监听 客户端的请求
 * 2. 当请求到来的时候能执行监听函数，并返回响应
 * 
 * 创建一个服务器
 * 指定监听 函数 每当有客户端请求到来的时候执行的函数
 * request 代表客户端的请求，可以从中获取请求过来的信息 response 代表向客户端发的响应 可以通过她向客户端发响应
 */
var server = http.createServer(function (request, response) {
    // write和end的参数只能是Buffer或字符串 不能是其他类型
    response.write('hello'); //可以向客户端发送响应 向客户端说话 
    response.write(' ');//可以再说一句话
    response.write('world');//可以再说一句话
    response.write(' ');//可以再说一句话
    // 设置内容类型（key/value key:Content-Type value:text/html;charset=utf-8）(响应告诉浏览器以哪种类型展示，a/b，a大类型，b小类型，为text类型html格式的并且编码是utf-8的，utf-8解决浏览器设置编码是GBK或其他非utf-8类型的会在浏览器显示乱码，所以告诉浏览器编码要展现utf-8的)
    response.write(new Date().toString());//可以再说一句话
    response.end(); //说完了 挂掉电话 end之后就不能在write了
});
// 端口 0 - 65535
server.listen(8080, 'localhost');

// 执行命令curl -v http://localhost:8080 可以通过该命令看请求和响应
// > GET / HTTP/1.1
// > Host: localhost:8080
// > User-Agent: curl/7.51.0 //代理：可以通过哪种客户端发请求 每种浏览器都不一样可以是chrome firefox等等

// > Accept: */* //可以接受的指定类型 */*任意类型
// > 
// < HTTP/1.1 200 OK
// < Date: Thu, 09 Mar 2017 13:47:27 GMT
// < Connection: keep-alive
// < Transfer-Encoding: chunked
// < 
// * Curl_http_done: called premature == 0
// * Connection #0 to host localhost left intact