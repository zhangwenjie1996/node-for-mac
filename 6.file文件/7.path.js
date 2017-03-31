var fs = require('fs');
// 处理路径
var path = require('path');
// 合并 连接路径
console.log(path.join('./book', 'node.json')); //自动拼接判断分隔符,是windows系统自动分隔符给拼成\，linux系统／
// 长度为零的 path 片段会被忽略。 如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录。
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // '..'表示回到上一级quux之前也就是asdf
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '.')); // '.'表示还在当前级别quux '.'和不加一样
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'));
// seperator 分隔符
console.log(path.sep);
// 获取当前模块的绝对路径
console.log(__filename); // /Users/zwj/node学习/6.读取文件/7.path.js
// 获取当前模块所在的绝对目录
console.log(__dirname); // /Users/zwj/node学习/6.读取文件
// 获取一个路径里文件的名
console.log(path.basename('7.path.js', '.js'));
// 获取一个路径里文件的扩展名
console.log(path.extname('7.path.js'));
// 从一个相对路径解析出一个绝对路径
// 从应用程序的所在目录为根起（7.path.js的所在目录即6.读取文件这个目录，但是mac本都会以最顶端root目录为相对的，windows下第一种写法即可，mac下读不到相对路径的文件，所以要用绝对路径path.join(__dirname）获取到当前所在的6.读取文件目录）
console.log(path.resolve('book', 'node.json')); ///Users/zwj/node学习/book/node.json
console.log(path.resolve(path.join(__dirname, 'book', 'node.json'))); ///Users/zwj/node学习/6.读取文件/book/node.json
console.log(path.resolve()); ///Users/zwj/node学习
console.log(path.resolve(path.join(__dirname))); ///Users/zwj/node学习/6.读取文件
console.log(path.resolve(path.join(__dirname, 'book'))); ///Users/zwj/node学习/6.读取文件
console.log(path.resolve('book', 'node.json', '..', 'javascript.json')); // '..'表示回到上一级book /Users/zwj/node学习/book/javascript.json
console.log(path.resolve(path.join(__dirname, 'book', 'node.json', '..', 'javascript.json')));
console.log(path.resolve('book', 'node.json', '.', 'javascript.json')); // '.'表示还在/node这个级别和不加一样 /Users/zwj/node学习/book/node.json/javascript.json
console.log(path.resolve('book', 'node.json', 'javascript.json'));