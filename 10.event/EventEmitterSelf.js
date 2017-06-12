// 自己模仿写个EventEmitter效果
function EventEmitter() {
    this._events = {}; //初始化一个私有的属性
}

// type 绑定的事件名
// listen 事件发生后的监听
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function (type, listener) {
    if (this._events[type]) {
        this._events[type].push(listener);
    } else {
        this._events[type] = [listener];
    }
}

EventEmitter.prototype.once = function(type,listener){

}

EventEmitter.prototype.emit = function (type, listener) {
    if (this._events[type]) {
        this._events[type].forEach(function (item) {
            item == listener ? listener() : null;
        })
    }
}

EventEmitter.prototype.emitAll = function (type) {
    if (this._events[type]) {
        this._events[type].forEach(function (listener) {
            listener.apply(null);
        })
    }
}

EventEmitter.prototype.removeListener = function (type, listener) {
    if (this._events[type]) {
        var listeners = this._events[type];
        for (var i = 0; i < listeners.length; i++) {
            listeners[i] == listener ? listeners.splice(i, 1) : null
        }
    }
}

EventEmitter.prototype.removeAllListeners = function (type) {
    if (this._events[type]) {
        delete this._events[type];
    }
}

module.exports = EventEmitter;