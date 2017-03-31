// buf.toString([encoding[, start[, end]]]);(start,end包前不包后)
// 字符串转buffer
var buffer = new Buffer('张文杰','utf8');
var buffer2 = new Buffer('hello');
console.log(buffer,buffer2);
// buffer转字符串
console.log(buffer.toString('utf8',3,6));
console.log(buffer.toString('utf8'));
console.log(buffer2.toString('utf8'));
console.log(buffer2.toString('utf8',2,5));
