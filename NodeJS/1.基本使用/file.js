var fs = require('fs'); //导入fs文件模块
var data = '中午吃点啥？';
fs.writeFile('./test.txt', data);
