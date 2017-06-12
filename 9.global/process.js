console.log(process);
var fs = require('fs');
var path = require('path');
console.log(process.cwd());// /Users/zwj/node学习 和 windows下显示不同 /Users/zwj/node学习/9.global?????
process.chdir('txt');//mac下由于没有9.global所以报错了？？？？
console.log(process.cwd());// /Users/zwj/node学习/txt 和 windows下显示不同 /Users/zwj/node学习/9.global/txt？？？？

// console.log(fs.readFileSync(path.join(__dirname,'txt/index.txt'),'utf-8'));
// console.log(fs.readFileSync(process.cwd()+'/9.global/txt/index.txt','utf-8'));
// console.log(fs.readFileSync('index.txt','utf-8'));


