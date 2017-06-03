### NodeJS模块和包管理
  1. 模块化
   * 传统开发模式，大量的js文件引入
    1. 变量冲突
    2. 依赖关系。比如使用了jquery的项目
    3. 命名空间
      * 原生js没有命名空间(namespace)的概念，需要手动创建
  2. NodeJS规范-CommonJS规范
  3. NodeJS中的模块分类
    * 核心模块 例如：http模块
    * 文件模块 例如：fs文件操作
    * 第三方模块：开发者开发的
  4. 模块使用
      1. 导入模块
        * require(模块名)
          1. 查找是否系统模块
          2. 查找node_modules里的模块
        * require(路径)
### npm- node模块和包管理工具
  1. 网站:https://www.npmjs.com/
  2. 常用命令
    1. npm install 包名字
      * npm install 包名字 -g  全局安装
      * npm install 包名字 --save-dev 项目内安装
    2. 例如
      * 安装moment这个第三方包处理日期
    3. npm 安装包，国内有时候很慢
      * 使用淘宝的 npm镜像 --registry=http://registry.npm.taobao.org
      * npm install 包名字 --save-dev --registry=http://registry.npm.taobao.org
    4. 列举已安装的包
      * npm list  
###第三方模块使用
  1. 安装moment模块
    * npm install moment --save-dev
    --registry=http://registry.npm.taobao.org
  2. 导入模块
    * require(模块名)
  3. 按模块手册提供的api使用  
    * var moment = require('moment'); //导入moment模块
    var date = moment().format(
    'YYYY年MM月DD日 HH:mm:ss'
    );

### package.json
  1. 说明包所需要的依赖，开源协议等
  2. 使用者只需要运行 npm install，
    就可以安装 项目所需要的模块
  3. 如何生成项目所需package.json文件
    * npm init
    * 填写相应信息
  4. npm install 包 --save-dev 会自动把依赖加到package.json里  
### package.json介绍
  1. dependencies  描述项目所有的模块依赖关系

### nodeJS 模块化开发- CommonJS规范
  1. commonJS规范
    * 一个文件就是一个模块
    * 每个模块有单独的作用域
    * 每个模块里面的变量和方法，都是私有的
    * 导入的模块需要使用exports命令，将变量和方法 提供给 其他模块使用
  1. 导入 require
  2. 导出 exports
