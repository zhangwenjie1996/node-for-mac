// File System
var fs = require('fs');
var path = require("path");

function afterRead(err, data) {
    if (err) throw err;
    console.log(data.toString());
}
// 用相对路径./index.txt报错找不到该文件
// 用绝对路径是个好习惯，用__dirname来（path.join(__dirname,'xxx.txt')）
// readFile是异步读取有回调
/*
1.异步方法需要把回调函数传入
2.回调函数会在同步方法执行完毕之后才执行异步回调（即使b输出后index.txt已经读取来，但是仍要后续执行输出c后才去回调执行afterRead）
3.异步方法不能阻塞主线程，不会影响后续代码的执行
*/
fs.readFile(path.join(__dirname, 'index.txt'), 'utf8', afterRead);
console.log('b');
console.log('c');
