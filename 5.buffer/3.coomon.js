var buf1 = new Buffer('张');
var buf2 = new Buffer('文');
var buf3 = new Buffer('杰');
// 方法：Buffer.concat([buf1,buf2],length);

// var all=Buffer.concat([buf1,buf2,buf3],9);
// console.log(all.toString('utf8'));

// var s=all.slice(6,9);
// console.log(s.toString());

// 方法：buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])

var buffers = new Buffer(9);
buf1.copy(buffers,0,0,3);
buf2.copy(buffers,3,0,3);
buf3.copy(buffers,6,0,3);
console.log(buffers.toString('utf8'));

console.log(Buffer.byteLength('张文杰ab'));
