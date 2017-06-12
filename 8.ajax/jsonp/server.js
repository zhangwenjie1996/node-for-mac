var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

// 只有当提交form表单并且是get请求的时候，浏览器才会把表单进行序列化拼到url后面
http.createServer(function (req, res) {
    // 一定会返回一个对象
    var urlobj = url.parse(req.url, true);
    var pathname = urlobj.pathname;
    var query = urlobj.query;
    if (pathname == '/') {
        fs.readFile(path.join(__dirname, './index.html'), 'utf8', function (err, data) {
            res.end(data);
        });
    } else if (pathname == '/books') {
        // res.end("show(['node.js','java'])");
        res.end(query.callback+query.name);
    }
}).listen(8888);