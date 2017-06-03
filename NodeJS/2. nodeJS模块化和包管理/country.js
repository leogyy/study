// 国家模块
var hero = require('./hero.js');
var job = require('./job.js');
var moment = require('moment');
var date = moment().format('YYYY-MM-DD HH:mm:ss');
var name = hero.showName();
var j1 = job.show();
console.log('当前时间为：' + date);
console.log('英雄 ' + name
+ '职业为：'+ j1 );
