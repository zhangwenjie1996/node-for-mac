// Buffer;
// Array;
// Buffer 类似于数组
// Buffer 里面只能放字节0-255
// 指定大小
var buffer = new Buffer(1);//传的参数数buffer的大小，给了1，代表只能存一个字节，最大值是255
buffer[0]=16;
console.log(buffer);//在console.log输出时候，是以16进制来计算的
// 通过字符串来创建
console.log(new Buffer("张"));
// 通过数组来创建（里面只能放数字，可以用任何进制表示，但是必须是个数）
console.log(new Buffer([11,0x0f,1,2,3]));
