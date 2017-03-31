var b=require('./a.js');//加载模块 require返回结果即是exports对象
console.log(b.a);//undefined 调用模块
console.log(b.add(1,2));//3 调用模块
