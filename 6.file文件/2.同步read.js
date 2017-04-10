// File System
var fs = require('fs');
var path = require("path");
/*
1.每一个同步方法和异步方法都是成对出现的
2.同步方法会阻塞主线程的执行，在数据没有返回之前不能执行后续代码
3.它不需要传递回调函数，通过函数返回值接收结果
4.
*/

// try catch不能捕获到异步方法的异常报错
try {
    var data = fs.readFileSync(path.join(__dirname, 'index.txt'), 'utf8');
} catch (err) {
    console.error(err);
}
console.log(data);
console.log('b');
console.log('c');
