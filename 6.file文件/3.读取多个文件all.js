var fs = require('fs');
var path = require('path');
// var name = fs.readFileSync(path.join(__dirname, 'name.txt'), 'utf8');
// var age = fs.readFileSync(path.join(__dirname, 'age.txt'), 'utf8');
// console.log(name, age);


// 回调函数嵌套实现多个异步操作完成之后执行的回调
/*
1.需要时间长
2.代码可读性非常差
*/

// fs.readFile(path.join(__dirname, 'name.txt'), 'utf8', function(err, name) {
//     fs.readFile(path.join(__dirname, 'age.txt'), 'utf8', function(err, age) {
//         fs.readFile(path.join(__dirname, 'index.txt'), 'utf8', function(err, index) {
//             console.log(name, age, index);
//         });
//     });
// });

// 计数器
var person = {};

function show() {
    if (Object.keys(person).length == 2) {
        console.log(person);
    }

}
fs.readFile(path.join(__dirname, 'name.txt'), 'utf8', function(err, name) {
    person.name = name;
    show();
});
fs.readFile(path.join(__dirname, 'age.txt'), 'utf8', function(err, age) {
    person.age = age;
    show();
});
// promise
