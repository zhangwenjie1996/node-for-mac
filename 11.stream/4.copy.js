var fs = require('fs');
var path = require('path');

function copy(src, target) {
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);
};
// 模拟pipe的实现思路
function pipe(source, dest) {
    // 先监听可读流的data事件
    source.on('data', function (chunk) {
        // 写成功就是ture，写失败就是false
        if (false === dest.write(chunk)) {
            // 停止触发data事件
            source.pause();
        } else {
            dest.write(chunk);
        }
    });
    // 当全部咽下之后，调用回调函数
    dest.on('drain', function () {
        source.resume();
    })
}

copy(path.join(__dirname, 'index.txt'), path.join(__dirname, 'copy.txt'));