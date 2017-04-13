/**
 * 1.内置模块 指定名字
 * 2.文件模块 路径
 * 3.第三方模块 指定名字
 */

var gl = require("./2.global");
// 获取模块文件的绝对路径
console.log(__filename);
// 获取当前模块文件的所在目录的绝对路径
console.log(__dirname);
console.log(global);
// global.var1=9;
/**
 * 1.global的属性可以不用引用，也不用声明，就可以直接用
 * 2.在node中在模块中能直接用有两种
 *    1.在全局对象下面的属性
 *    2.初始化模块时传入的参数
 */

// __filename和__dirname到底是不是global的全局变量
// node.js中我们可以直接访问到最大的boss全局对象global.
// 同时我们也可以直接访问到filename和dirname:

// 但是，你可以尝试一下用global.filename和global.dirname，得到的却是undefined.
// 所以，filename和dirname并不是全局变量，是每个模块都特有的，如果是全局变量的话只能有一份，就会冲突，而require("./2.global");时候输出的__filename和1.globaljs中输出的__filename是不一样的两个值，所以__filename不是global的全局变量全局属性，其实他们二个是每个module包的本地变量。

