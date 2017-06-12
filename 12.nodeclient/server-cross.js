var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var users = [];
var server = http.createServer(function (req, res) {
    // var urlobj = url.parse(req.url, true);
    // var pathname = urlobj.pathname;
    // console.log(pathname);
    // if (pathname == '/') {
    //     fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function (err, data) {
    //         res.end(data);
    //     });
    // }  
fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
}).listen(8888)