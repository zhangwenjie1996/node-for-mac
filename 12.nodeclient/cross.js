var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var users = [];
var server = http.createServer(function (req, res) {
    // 一定会返回一个对象
    var urlobj = url.parse(req.url, true);
    var pathname = urlobj.pathname;
    console.log(pathname);
        var result = '';
        req.on('data', function (data) {
            result += data;
        });
        req.on('end', function (data) {
            users.push(JSON.parse(result));
            // 允许http://localhost:8888访问该服务
            res.setHeader('Access-Control-Allow-Origin', "http://localhost:8888");
            res.end(JSON.stringify(users));
        });

}).listen(9090)