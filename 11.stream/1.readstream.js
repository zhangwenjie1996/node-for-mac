var fs = require('fs');
var path = require('path');
// 创建可读流 一次默认读64k
var rs = fs.createReadStream(path.join(__dirname,'index.txt'),{
    start:3,
    end:8,
    highWaterMark:4
});
// 设置编码
rs.setEncoding('utf8');//自动调用了tostring
// on eventemitter 事件监听器 监听data事件，当读到数据时候会触发data事件
rs.on('data',function(data){
console.log('得到数据',data);
});
// 从文件中读取完毕之后会触发end事件
rs.on('end',function(){
    console.log('end')
});
// 读取出错时候会触发error事件
rs.on('error',function(error){
    console.log(error)
});
/**判断错误
 * 1.同步方法 try catch
 * 2.异步 判断回调函数里的error对象是否有值
 * 3.在流里判断错误 监听它的error事件
 */