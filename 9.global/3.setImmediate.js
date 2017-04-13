// setImmediate与setTimeout两个方法执行先后是不定的
// process.nextTick肯定快于setImmediat/setTimeout

// 它每次都比对时间
setTimeout(function(){
    console.log('a');
},0);

// 效率高直接执行
// 在*下一个*事件环中执行此函数
setImmediate(function(){
    console.log('b');
});

//把这个函数放在*当前的*任务末尾 nextTick在当前队列所以快于下一个事件队列的setImmediate
process.nextTick(function(){
    console.log('c');
});

// 这当然是最快的 当前任务的最先开始
console.log('d');