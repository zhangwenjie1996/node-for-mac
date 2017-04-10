#### form标签的enctype属性

| 值         | 描述  |
| ------------- | -----:|
| application/x-www-form-urlencoded      | 在发送前**编码**所有字符(默认) |
| multipart/form-data      |   **不对字符编码**,在使用包含*文件*上传控件的表单时,必须使用该值 |
| text/plain |    空格转换为“+” 加号，但不对特殊字符编码|

#### send方法重载参数
|属性           |  属性定义
| ------------- | -----:|
|               | 空
| DOMString     | 字符串
| FormData      | 格式化表单数据