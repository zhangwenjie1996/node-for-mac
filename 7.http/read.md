VS Code在编辑.md文档的时候，可以通过快捷键 Ctrl+Shift+V来预览最终的显示效果。
![Img src](./http.jpg)
#### 一个普通网站的访问过程1
- 浏览器（或其他客户端如微信）向服务器发出一个http请求
> 请求的url：
  - eg：http://user:pass@zhufengpeixun.cn:80/node/index.html？type=1#top
    - http:协议方案名
    - user：pass：登录信息（认证）
    - zhufengpeixun.cn；服务器地址
    - 80:服务器端口号
    - node/index.html:带层次的文件路径
    - type=1:查询字符串
    - #top：片段标识符

- 先把域名解析为IP地址（chrome缓存一分钟（chrome://net-internals/#dns)-> 搜索操作系统缓存->读取本地host文件->发起DNS系统调用->运营商DNS缓存->找根域->com域） 
- 客户端通过随机端口向服务器发起TCP三次握手，建立了TCP连接
- 连接建立后浏览器就可以发送http请求了
- 服务器接收到http请求，解析请求的路径和参数，经过后台的一些处理之后生成完整响应页面
- 服务器将生成的页面作为http响应体，根据不同的处理结果生成响应头，返回给客户端


#### 报文
- 请求报文
  - 起始行：请求方法 请求的url http/协议版本
  - 请求头：通用头+请求头+实体头+扩展头
  - 请求体：发送的数据（get类请求方法请求体为空）

- 响应报文
  - 响应行：http/协议版本 状态码 状态短语
  - 响应头：通用头+响应头+实体头+扩展头（setheader/writehead）
  - 响应体：响应的数据

#### readyState状态的值
| 属性         | 属性含义  |
| ------------- | -----:|
| 0（未初始化）   | 对象已建立，但是尚未初始化（尚未调用open方法）
| 1（初始化）     | 对象已建立，尚未调用send方法
| 2（发送数据）   | send方法已调用，但是当前状态及http头未知
| 3（数据传送中） | 已接受部分数据，因为响应及http头不全，这时通过responseBody和resopnseText获取部分数据会出现错误
| 4（完成）       | 数据接收完毕，此时可以通过responseBody和resopnseText获取完整的回应数据

当使用同步的时候，send方法后都会阻塞，一直等到服务器响应，所以send方法要放在最后
#### send方法重载参数
|属性           |  属性定义
| ------------- | -----:|
|               | 空
| DOMString     | 字符串
| FormData      | 格式化表单数据

ping一下可以看出域名对应的IP地址
在命令行中 ping www.baidu.com

#### xhr对象的属性

| 属性名         | 描述  |
| ------------- | -----:|
| onreadystatechange      | 一个当readyState属性改变时会调用的**回调函数**对象 |
| response      |   **响应内容**，响应实体类型由responseType指定 |
| zresponseType |    修改响应**类型** |
| zresponseText |    响应为**文本** |
| status |    响应**状态码** |
| statusText |    响应状态码**描述信息** |

#### responseType响应类型
XMLHttpRequest.responseType 设置该值能够改变响应类型，设置后会把XMLHttpRequest.response转换为相应的类型。
| 属性名         | 描述  |
| ------------- | -----:|
| “”（空字符串）  | 字符串（默认值），设置后response和responseText都会是一个**字符串** |
| json          | 设置后respnse和responseText都会是一个**JOSN**对象 |
| text          | 字符串，设置后response和responseText都会是一个**字符串** |

> 闲余可看看thinkjs