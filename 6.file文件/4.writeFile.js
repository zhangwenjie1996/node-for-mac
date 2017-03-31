// fs.writeFileSync(file, data[, options])（这个文件file可以存在可以不存在）
var fs = require('fs');
var path = require('path');
// 以同步的方式向硬盘的文件里写数据
// fs.writeFileSync(path.join(__dirname,'write.txt'),'张文杰@xnl');

/*
异步操作
flag 是表示要对此文件做何种类型的操作
w 清空并写入
a 在原有基础上追加
*/
// fs.writeFile(file, data[, options], callback)
// fs.writeFile(path.join(__dirname, 'write.txt'), '我好想你', {flag:'a'}, function(err) {
//     if (err) {
//         console.log(err);
//     }
// });
// fs.appendFile(file, data[, options], callback)
fs.appendFile(path.join(__dirname, 'write.txt'), 'zwjxnl', 'utf8');