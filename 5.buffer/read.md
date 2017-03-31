详细查nodejs官方文档http://nodejs.cn/api/
# 什么是buffer
- 缓冲区buffer是暂时存放输入输出数据的一段内存
- js语言没有二进制数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据
- nodejs提供了一个buffer对象来提供对二进制数据的操作
- 是一个表示‘固定’内存分配的全局对象，也就是说要放到缓存区中的字节数需要‘提前确定’（不比数组，可以push，数据长度不确定）
- buffer好比由一个‘八位字节’元素组成的数组，可以有效的在javascript中表示二进制数据

# 什么是字节
- 字节（Byte）是计算机存储时的一种计量单位，一个字节等于‘8位’二进制数（二进制数表示0/1）
- 一个位就代表一个0/1，每8个位（bit）组成一个字节（byte）
- 字节是通过网络传输信息的单位
- 一个字节最大值十进制数是255
- 一个汉字三个字节
11111111
100000000-1

# ASCII码使用指定的7位或8位二进制数组合来表示128/256中可能的字（如13转义字符\r，代表回车）

# 定义buffer
- new Buffer(size)
- 数组创建（new Buffer(array)）
- 字符串创建 new Buffer(str,[encoding]);

# 字符串和buffer转换
- Buffer转字符串buf.toString([encoding[, start[, end]]]);

# buffer常用方法
- 合并Buffer Buffer.concat([buf1,buf2],length);
- 复制Buffer buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
- 判断是否是Buffer.isBuffer
- 获取字节长度 Buffer.byteLength
