// 入口文件
import add from './add'; //导入一个方法
import Test from './test'; //导入类
// import {reduce,name} from './count' //导入并解构
import * as count from './count'; //整体导入模块，
// 赋值给 count

console.log(count.name);
let res3 = count.reduce(3,1);
console.log(res3);

let res1 = add(8, 7);

let test = new Test();
let res2 = test.ride(3,7);
console.log(res2);

console.log(res1);
