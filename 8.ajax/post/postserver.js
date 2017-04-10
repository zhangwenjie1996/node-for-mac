var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
// querystring.parse(str, [sep], [eq], [options])
// 将字符串转成对象。说白了其实就是把url上带的参数串转成数组对象。（看例子就知道咯）
// 语法：
// querystring.parse(str, [sep], [eq], [options])
// 接收参数：
// str                                         欲转换的字符串
// sep                                       设置分隔符，默认为 ‘&'
// eq                                         设置赋值符，默认为 ‘='
// [options]  maxKeys             可接受字符串的最大长度，默认为1000
// 例子：
// querystring.parse('foo=bar&baz=qux&baz=quux&corge')
// // returns
// { foo: 'bar', baz: ['qux', 'quux'], corge: '' }

// querystring.stringify(obj, [sep], [eq])
// 将对象转换成字符串，字符串里多个参数将用 ‘&' 分隔，将用 ‘=' 赋值。
// 这个函数的操作和 querystring.parse() 是相反的，具体可以看一下例子就了解了。
// 语法：
// querystring.stringify(obj, [sep], [eq])
// 接收参数：
// obj                                         欲转换的对象
// sep                                        设置分隔符，默认为 ‘&'
// eq                                          设置赋值符，默认为 ‘='
// 例子：
// querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
// // returns
// 'foo=bar&baz=qux&baz=quux&corge='
//
// querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':')
// // returns
// 'foo:bar;baz:qux'


var querystring = require('querystring');
// 第三方模块 需要安装 npm i formidable
var formidable = require('formidable');
// 只有当提交form表单并且是get请求的时候，浏览器才会把表单进行序列化拼到url后面
http.createServer(function (req, res) {
    // 一定会返回一个对象
    var urlobj = url.parse(req.url, true);
    var pathname = urlobj.pathname;
    if (pathname == '/') {
        fs.readFile(path.join(__dirname, './post上传图片.html'), 'utf8', function (err, data) {
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

         var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
    }
}).listen(8888);