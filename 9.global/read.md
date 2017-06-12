
 - 1.global的属性可以不用引用，也不用声明，就可以直接用
 - 2.在node中在模块中能直接用有两种
 -    1.在全局对象下面的属性
 -   2.初始化模块时传入的参数


* __filename和__dirname到底是不是global的全局变量*
> - node.js中我们可以直接访问到最大的boss全局对象global.
> - 同时我们也可以直接访问到filename和dirname:但是，你可以尝试一下用global.filename和global.dirname，得到的却是undefined.所以，filename和dirname并不是全局变量，是每个模块都特有的，如果是全局变量的话只能有一份，就会冲突，而require("./2.global");时候输出的__filename和1.globaljs中输出的__filename是不一样的两个值，所以__filename不是global的全局变量全局属性，其实他们二个是每个module包的本地变量。

#### 全局对象
- console(global下属性)
- __filename
- __dirname
- setTimeout
- setImmediate

#### unit
> util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。 JavaScript的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript没有提供对象集成的语言级别特性，而是通过原型复制来实现的

- 子类仅仅继承了父类在原型中定义的函数
- 要想继承私有的，用call

#### process(也是global下的一个属性)
- cwd
- chdir
- memoryUsage

