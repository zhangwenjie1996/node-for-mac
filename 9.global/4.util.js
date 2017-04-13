var util= require('util');

function Parent(){
    this.name = 'father';
    this.age = 40;
    this.say = function(){
        console.log(this.name);
    };
}

function Child(){
    this.name = 'child';
    
};

util.inherits(Child,Parent);
var c = new Child;
console.log(c);