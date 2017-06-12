var util = require('util');

function Parent() {
    this.name = 'father';
    this.age = 40;
    this.say = function () {
        console.log(this.name);
    };
}
Parent.prototype.showName = function () {
    console.log('show', this.name);
}

function Child() {
    // 把父类"私有的属性和方法"克隆一份一模一样的作为子类"私有的属性"（就是完全拿过来了）
    Parent.call(this); //私有属性和方法；call放在this.name='child'之后，c.name='parent',反之，this.name = 'child';放在call后，c.name='child‘ 
    this.name = 'child';
};
// 仅继承父类的prototype上的属性
util.inherits(Child, Parent); //可以获取原型上的属性方法 下面的c.showName能获取到，否则仅能获取的call继承的私有属性和方法
var c = new Child;
var p = new Parent;
console.log(c);
console.log(p);
c.showName();
/**
 * 将任意一个对象转成字符串
 * 
 */
c.hobby = {
    name:'play',
    price:{
        name:'price'
    }
}
console.log(util.inspect(c,{depth:2}),typeof (util.inspect(c,{depth:2})));

console.log(util.isArray([]));//true
console.log(util.isRegExp([]));//false
console.log(util.isDate([]));//false
console.log(util.isError([]));//false