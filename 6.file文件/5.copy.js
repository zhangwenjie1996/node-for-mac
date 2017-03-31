/**
 * 自己写个copy实现文件内容拷贝
 * 把src里的文件内容，写入到target文件里
 * 2.写入时要先清空在写入
 */

var fs = require('fs');
var path = require('path');

function copy(src, target) {
    fs.readFile(path.join(__dirname, src), function(err, data) {
        if (err) throw err;
        fs.writeFile(path.join(__dirname, target), data, {
            flag: 'w'
        }, function (err) {
            if (err) {
                console.log(err);
            }
        })
    })
}
// 图片是二进制数据 不是utf编码字符类型的 所以读的时候是二进制文件 用'binary'或者不用写
copy('lmh.jpg', 'lmh2.jpg')