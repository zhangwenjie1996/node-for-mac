/**
 * 操作目录
 */

var fs = require('fs');
var path = require('path');

// 1.mk dir
// 创建目录
// 创建目录的时候要求父目录必须存在即在确定执行了test，a才会生成，同样，test/a之后b才会创建成功，否则直接写text/a/b失败
// fs.mkdir(path.join(__dirname, 'test/a/b'), function (err) {
//     if (err) {
//         console.log('目录创建失败');
//     } else {
//         console.log('目录创建成功');
//     }
// })

// 创建文件夹 如果父文件不存在的话，则需要自动创建
var mkdirs = function(path, callback){
    var dirs = path.slice(0).split("/");
    console.log(dirs);
    var i = 0;
    var mk = function(err){
        i += 1;
        if(i > dirs.length){
            callback(err);
            return;
        }
        fs.mkdir(dirs.slice(0, i).join('/'), function(err){
            mk(err);
        });
    };
    mk();
};

mkdirs(path.join(__dirname,'test/test2/text3/text4/test5/test99'), function(err){
    console.log(err);
});


   
    // 2.读取目录下面所有的文件
    fs.readdir(path.join(__dirname, 'book'), function (err, files) {
        console.log(files);
    })

    // 3.获取一个文件或目录详情
    fs.readdir(path.join(__dirname, 'book'), function (err, files) {
        // 循环文件列表
        files.forEach(function (file) {
            // 获取文件详情
            fs.stat(path.join(__dirname, 'book/' + file), function (err, state) {
                console.log(state.isDirectory()); //是否是目录
                console.log(state.isFile()); //是否是文件
                console.log(state, state.size)
            })
        })
    })

    // 4.判断一个文件(或文件夹)是否存在
    fs.exists(path.join(__dirname, 'book/javascript.json'), function (exists) {
        console.log("exists", exists)
    })