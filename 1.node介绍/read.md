### node.js功能越来越强大
- 项目管理:npm,grunt ,gulp,bower,yeoman
- 桌面应用:node-webkit
- web开发：express,ejs,hexo,socket.io,restify,nodeppt,stylus,browserify,cheerio
- 数据库：mysql,mongoose,redis,memcached
- 工具包：underscore,moment,connect,later,log4js,passport(oAuth),requ
- 异步：async,wind,eventproxy,bluebird
- 部署：forever,pm2,nodemon
- 测试：jasmine，karma,protractor
- 集群：cluster
- 模板：jade,ejs
- 博客：ghost，hexo
- 微信：weui
- 硬件控制：NoduinoWeb

#### REPL
（Read-eval-print loop:”读取-求值-输出”循环）
#### 模块
每个js文件都是一个模块，模块内部声明都变量都是私有变量，外部无法访问
- 创建模块
a.js
- 导出模块
exports.add=function add(a,b){
  return a+b
}
- 加载模块
var b=require('./a.js');
- 调用模块
b.add(1,2)；

eg：

- a.js（创建模块）

```
var a=1;
//exports={}
function add(a,b){
  return a+b
}
exports.add=add;//导出模块

```

- b.js

```
var b=require('./a.js');//加载模块 require返回结果即是exports对象
console.log(b.a);//undefined 调用模块
console.log(b.add(1,2));//3 调用模块

```
