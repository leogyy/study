### ES6 模块化
  1. import 导入模块
  2. export 导出

  3. webpack + babel 编译ES6,使浏览器支持
  ES6 模块化
  4. webpack是一个模块打捆器
    * webpack 需要加载器loader
    * webpack需要一个webpack.config.js(webpack配置文件)


### webpack
  1. 安装相关包
  2. 编写webpack.config.js
  3. 可以愉快的编写ES6了

### ES模块化规范
  1. 编译时加载
  2. 一个模块是一个独立的文件
  3. 该文件内部所有变量，外部无法访问
  4. 外部使用模块，需要使用import，模块自身需要export

### export命令
  1. as 关键字，重命名对外接口
  ``` JavaScript
  export {n as m};
  ```
  2. 可以导出 class， json对象， function和变量

### import命令
  1. 导入模块的时候，解构
   ``` JavaScript
   import {fn1, fn2} from './test';
   ```
  2. {} 中变量名，必须于导出的模块接口名字相同
  3. 可以使用 as关键字 重命名一个名字
  ``` JavaScript
   import {reduceaaaa  as reduce} from
   './test'
  ```
  4. 模块整体导出
    * 使用 * 指定一个对象，导出所有值和方法
