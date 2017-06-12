var fs = require('fs');
var path = require('path');
var ws = fs.createWriteStream(path.join(__dirname,'write.txt'),{
    flags:'a',// a 表示不清空原来的文件，进行追加
    start:9
});
ws.write("好",'utf8',function(){
    console.log(arguments)
});
ws.write("想",'utf8',function(){
    console.log(arguments)
});
ws.end("你",'utf8');