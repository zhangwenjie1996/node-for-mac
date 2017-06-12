var url = require('url');
var querystring = require('querystring');
console.log(url.parse('http://zwj1996:123@github.com:80/WenJieZhang?name=zwj'));
// querystring.parse 只是解析的查询字符串
console.log(querystring.parse('name=zwj'));

// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: 'zwj1996:123',
//   host: 'github.com:80',
//   port: '80',
//   hostname: 'github.com',
//   hash: null,
//   search: '?name=zwj',
//   query: 'name=zwj',
//   pathname: '/WenJieZhang',
//   path: '/WenJieZhang?name=zwj',
//   href: 'http://zwj1996:123@github.com:80/WenJieZhang?name=zwj' }

// { name: 'zwj' }