var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
// 第三方模块 需要安装 npm i formidable
// formidable模块解析复杂的文件内容，实现了上传和编码图片和视频。它支持GB级上传数据处理，支持多种客户端数据提交。有极高的测试覆盖率，非常适合在生产环境中使用。
var formidable = require('formidable');
var mime = require('mime');
var util = require('util');
// 只有当提交form表单并且是get请求的时候，浏览器才会把表单进行序列化拼到url后面
http.createServer(function (req, res) {
    // 一定会返回一个对象
    var urlobj = url.parse(req.url, true);
    var pathname = urlobj.pathname;
    console.log('pathname',urlobj,"===",pathname)
    if (pathname == '/') {
        fs.readFile(path.join(__dirname, './post文件上传.html'), 'utf8', function (err, data) {
            res.end(data);
        });
    } else if (pathname == '/reg') {
        var result = '';
        req.on('data', function (data) {
            result += data;
        });
        req.on('end', function (data) {
            // 取出请求体的内容类型
            var contentType = req.headers['content-type'];
            var obj;
            // 如果请求发过来的是序列化表单（&符连接）
            if (contentType == 'application/x-www-form-urlencoded') {
                // 把查询字符串转成对象
                obj = querystring.parse(result);
            } else if (contentType == 'application/json') {
                // 如果是json格式字符串转换为对象
                obj = JSON.parse(result);
            }

            console.log(obj);
            res.end('ok');

        });
    } else if (pathname == '/reg2') {
        // res.end('reg2');
        // 构建一个解析器
        var form = new formidable.IncomingForm();
        // 用解析器解析请求体
        // 把非file的input放在fileds里
        // 把文件类型的元素放在files里
        form.parse(req, function (err, fields, files) {
            // res.write('received upload:\n\n');   
            // res.end(util.inspect({
            //     fields: fields,
            //     files: files
            // }));
            fs.readFile(files.avatar.path, function (err, data) {
                var filename = path.join(__dirname, 'imgs/' + files.avatar.name);
                fs.writeFile(filename, data, function (err) {
                    res.writeHead(200, {
                        'content-type': 'text/plain'
                    });
                    res.end('/imgs/' + files.avatar.name);
                })
            })

            // util.inspect({ fields: fields,files: files}输出：
            // { fields: { username: 'zwj', password: '123' },
            //   files: 
            //    { avatar: 
            //       File {
            //         domain: null,
            //         _events: {},
            //         _eventsCount: 0,
            //         _maxListeners: undefined,
            //         size: 5686,
            //         path: '/var/folders/wg/9nd1d60j2kdf9gkrytbk2mdm0000gn/T/upload_cdc8dadba8e6f98ab31826565fdc5b7c',
            //         name: 'favicon.ico',
            //         type: 'image/vnd.microsoft.icon',
            //         hash: null,
            //         lastModifiedDate: 2017-04-12T13:06:49.253Z,
            //         _writeStream: [Object] } } }

         
        });
    } else {
        fs.exists(path.join(__dirname, pathname), function (exists) {
                console.log(path.join(__dirname, pathname),'==',path.join(__dirname),'++',pathname);
            
            if (exists) {
                res.setHeader('Content-Type', mime.lookup(path.join(__dirname, pathname)))
                fs.readFile(path.join(__dirname, pathname), function (err, data) {
                    res.end(data);
                })
            } else {
                res.statusCode = 404;
                res.end('404');
            }
        })
    }
}).listen(8888);