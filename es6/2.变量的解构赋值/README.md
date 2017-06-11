### 变量的解构赋值
  1. ES6 允许按照一定的模式，从
  数组和对象中提取值，对变量进行赋值，
  称为 解构赋值
  2. 数组解构赋值
    * 解构不成功，变量值为undefined
    ``` JavaScript
    let [a, b, c] = [1, 2];
    console.log(a); //1
    console.log(b); //2
    console.log(c); // undefined
    ```
   3. json对象解构赋值
     ``` JavaScript
      let {name,job} = {name:'李白', job:'剑客'}
      console.log(name);
     ```
     * 没有顺序要求，变量必须与属性同名，才能取到值
   4. 字符串的解构赋值
     `` JavaScript
     let [a,b,c,d,e] = 'hello';
     console.log(a);
     ```
   5. 解构赋值在函数中使用
    ``` JavaScript
    function add([x,y]){
      console.log(x + y)
    }
    add([1,2])
    ```

### 变量的解构赋值的用途
  1. 交换变量
   ``` JavaScript
    let x = 1;
    let y = 2;
    [x,y] = [y,x];
    //[x,y] = [2,1];
    console.log(x);
    console.log(y);
   ```
  2. 提取json
  3. 获取模块中的方法
     ``` JavaScript
      let  {SourNode} = require('source-map');
     ```
  4. 多个函数返回值
     ``` JavaScript
      function test(){
        return {
          name : '李白',
          job : '剑客'
        }
      }

      let {name,job} = test();
     ```
