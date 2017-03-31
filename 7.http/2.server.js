var http = require('http');
var server = http.createServer(function (request, response) {
    // 设置内容类型（key/value key:Content-Type value:text/html;charset=utf-8）(响应告诉浏览器以哪种类型展示，a/b，a大类型，b小类型，为text类型html格式的并且编码是utf-8的，utf-8解决浏览器设置编码是GBK或其他非utf-8类型的会在浏览器显示乱码，所以告诉浏览器编码要展现utf-8的)
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.end(new Date().toString());  
});
server.listen(9090, 'localhost');