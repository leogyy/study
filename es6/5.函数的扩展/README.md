### ES6函数
  1. 函数的参数默认值
    * ES6 新增了函数的默认值
    * 如果不传参，会默认使用定义的参数默认值
    * ``` JavaScript
      function add(x=0,y=0){
        console.log(x+y);
      }
      add()
      ```
  2. 扩展运算符 ...
    * 将数组转为 逗号 分隔的参数序列
      ``` JavaScript
      console.log(...[1,2,3])
      ```
    * 在给函数传参数时，展开数组
      ``` JavaScript
      function add(x, y, z){
        console.log(x +　y + z);
      }
      let arr = [2,3]
      add(1, ...arr); //6
      ```
    * 合并数组
      ``` JavaScript
      let arr1 = [1,2,3];
      let arr2 = [4,5,6,7,8,9];
      let arr3 = [10,11,12];
      let arr = [];
      arr = [...arr1, ...arr2, ...arr3];
      console.log(arr);
      ```  
    * 数组操作中使用
      ``` JavaScript
      //ES6写法 将一个数组 push到另一个数组
      let arrS1 = [1,2,3];
      let arrS2 = [4,5,6];
      arrS1.push(...arrS2);
      console.log(arrS1); //[1,2,3,4,5,6]
      ```
    * 字符串转数组
      ``` JavaScript
      let str = 'hello';
      let arr = [...str]; // ['h','e','l','l','o']
      ```  
### 箭头函数
  * ES6 允许 使用箭头 => 定义函数
    1. ``` JavaScript
        let add = (x,y) => {console.log(x+y)}
       ```
    2. add 为 函数名
    3. (x,y) 为参数
    4. =>后面的为函数体
  * 如果箭头函数的 函数体多于一条语句，
  使用 {} 括起来，使用 return 返回返回值

  * 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
