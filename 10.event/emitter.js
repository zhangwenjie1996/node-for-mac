var EventEmitter = require('events'); //node 核心模块
var util = require('util');

function Girl(name) {
    this.name = name;
    EventEmitter.call(this);
}
util.inherits(Girl, EventEmitter);

var girl = new Girl();

function Boy(name) {
    this.name = name;
    this.say = function (words) {
        console.log(this.name, words)
    }
}
var zwj = new Boy('张文杰');
var xnl = new Boy('是雷轰');
// 注册监听 事件 订阅
var m = zwj.say.bind(zwj, '我好想你');
girl.addListener('look', m);
// 注册监听 事件 订阅
girl.on('look', xnl.say.bind(xnl, '我也想你'));
// 发射事件 发布
girl.emit('look');
// 移除特定的某个
// girl.removeListener('look',m);
// 移除所有
girl.removeAllListeners('look');
girl.emit('look');

// 如果发射多次事件，只会触发一次（相当于注册一次就把监听去掉了）
girl.once('饿了', function () {
    console.log('我要吃饭');
});
girl.emit('饿了');
girl.emit('饿了');
girl.emit('饿了');
girl.once('饿了', function () {
    console.log('我要吃饭');
});
girl.emit('饿了');