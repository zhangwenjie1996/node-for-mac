/*
对于mac来说 要想在当前目录下通过本地安装生成node_modules文件夹，需找当前目录中npm init 初始化生成package.json方可
*/

//file system
// 内置模块:加载FS核心模块（不需要加路径）NODE自带的亲生的模块
var fs=require('fs');
fs.readFile('./index.txt');

// 文件模块 就是我们自己写的模块文件模块
require('./math.js')

// 别人给你生的，第三者生的，第三方模块
// 安装模块
// 全局安装 直接下载到node的安装目录中，各个项目都可以调用，适合工具模块，比如gulp
// eg: npm install -global [package name]

// 本地安装(会在当前目录下面多一个node_modules文件夹，你安装的文件会作为node_modules的子目录) (它是一层一层往上找，本层js所在目录没有node_modules，往顶层找)
// 将一个模块下载到当前目录到node_modules子目录，然后只有在当前目录和它的子目录之中，才能调用这个模块
// npm install [package name]
var mime=require('mime');//不写路径 它会先判断这个模块是不是node亲生的 是亲生的就按照亲生的找 不是就找node_modules文件夹下有无这个文件夹
console.log(mime);
