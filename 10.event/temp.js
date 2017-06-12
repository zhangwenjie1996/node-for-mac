function say(name,word){
    console.log(this.name,name,word);
}
var obj ={
    name:'zhang'
};
var newSay = say.bind(obj,"zwj");//未执行
newSay('xnl');