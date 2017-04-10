var querystring = require('querystring');
var s = 'name=zwj&age=18';
console.log(querystring.parse(s));
console.log(querystring.stringify(querystring.parse(s)));
