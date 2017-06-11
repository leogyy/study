### let
  1. let定义变量
    * let定义的变量在所在的代码块有效
  2. let不允许在相同作用域下，重复定义变量

### const
  * 定义一个常量。一旦声明,常量的值不能改变
    ``` Javascript
      const PI = 3.1415;
      PI = 3;
      console.log(3); //报错
    ```
   * const 一旦声明变量，就必须初始化，不能以后留着赋值
   ``` Javascript
    const a;
    a = 1;
    console.log(a);//报错
   ```
