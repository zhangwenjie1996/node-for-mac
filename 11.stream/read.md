### 流
- 流是一种有序的，有起点和终点的字节数据传输手段
- 不关心文件的整体内容，只关注是否从文件中读到了数据，以及读到数据之后的处理
- 流是一个抽象接口，被Node中的很多对象所实现，比如对一个HTTP服务器的请求对象request是一个流，服务器响应给客户端的response也是一个流，stdout也是一个流
- request 有 on('data','end','error') write end既是可读/写流  response write end也有on('data','end','error')既是可读/写流


### 判断错误
 - 1.同步方法 try catch
 - 2.异步 判断回调函数里的error对象是否有值
 - 3.在流里判断错误 监听它的error事件

 ### 可读流触发的事件
|事件           |  描述
| ------------- | -----:|
| data            | 绑定一个data事件监听器它会将流切换到流动模式，数据会被尽可能快的读出
| end     | 该事件会在读完数据后被触发
| error      | 当数据接收时发生错误时触发

#### 可读流的方法
|方法           |  描述
| ------------- | -----:|
| setEncoding            | 指定编码
| pause     | 通知对象停止触发data事件
| resume      | 通知对象恢复触发data事件
| pipe      | 设置管道，将可读流里的内容导入到参数指定的可写流里

#### 可写流的方法
|方法           |  描述
| ------------- | -----:|
| write            | 写入数据
| end     | 结束写入数据时触发，迫使缓存区中的数据立即写入目标对象，调用后不能在写入

#### pipe
流，尤其是pipe()方法的初衷，是将数据的滞留量限制到一个可接受的水平，以使的不同速度的来源和目标不会淹没可用内存。（一直读而写不及或读的太慢）
readStream.pipe(writeStream,[options]);

#### 常见请求头信息(req.headers)（从客户端发送服务器发送请求报文所使用的字段，用于补充请求的附加信息）
```
 { host: 'localhost:8080',
   connection: 'keep-alive',
   'cache-control': 'max-age=0',
   'upgrade-insecure-requests': '1',
   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36',
   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
   'accept-encoding': 'gzip, deflate, sdch, br',
   'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6' }
   ```

- host 请求的服务器主机。 HTTP/1.1请求**必须**包含主机头，否则会返回400状态码
- connection 客户端和服务器**连接**选项
- accept 告诉服务器客户端能够处理的**内容类型**和**优先级** q= 表示权重，用分号；分隔，范围是0-1，不指定时权重默认为1
- user-agent **用户代理**，是指浏览器，它的信息包括硬件平台，系统软件，和用户个人偏好
- accept-encoding  告诉服务器客户端支持的**内容编码**及内容编码的**优先级**顺序
- accept-language 告诉服务器能够处理的**语言**以及优先级

#### 把原始URL转成对象
```
var urlObj = url.parse('原始的url');
```
##### urlObj的属性
- href 被转换的**原URL**字符串
- protocal 客户端请求时的**协议**
- slashes 在协议与路径中间是否使用**//**分隔符
- host URL字符串中完整的**地址及端口号**，可能为IP也可能为主机名
- auth **认证**部分
- hostname **主机名或IP**
- port **端口号**
- pathname **路径**不包含查询字符串
- query 不包含起始字符？的**查询字符串**，或根据该查询字符串转换而成的对象（由url.parse方法的**第二个**参数决定，true就会转换为对象）

#### 把对象转成URL

#### 查询字符串
##### querystring用来对**查询字符串**进行转换
```
var queryObj = querystring.parse(str,[sep],[eq],[options]); //字符串转对象
var queryStr = querystring.stringify(obj,[sep],[eq]);//对象转字符串
```
#### response http.serverResponse代表服务器响应对象
```
response.writeHead(statusCode,[reasonPhrase],[headers]);
```
- statusCode **状态码**
- reasonPhrase 状态码**描述**信息
- headers 响应头信息
  - content-type **内容类型**
  - location **重定向**到的url地址
  - content-disposition 下载的**文件名**
  - content-length 响应内容到**字节数**
  - set-cookie 写入客户端的**cookie**
  - content-encoding 响应内容到**编码**方式
  - Cache-Control 缓存
  - Expires 指定缓存**过期时间**
  - Etag 服务器响应**内容没有变化**时不重新下载数据
  - connection 默认是keep-alive**保持连接**，想断开连接用close
  


 
 
 
