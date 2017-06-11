### ES6 module 模块化
  1. ES6 使用模块化
    * import 导入
    * export 导出
  2. 项目目录规划
      * project(项目目录)
      *   --- node_modules (node第三方包)
      *   --- app(模块文件夹)
      *       --- index.js(入口文件)
      *       ---  add.js(add模块)
      *       ---  reduce.js(reduce模块)
      *   --- webpack.config.js(该项目的webpack配置文件)
   3. 所需的node包
      * webpack (模块打捆器)
      * babel (webpack中的babel)
        1. babel-loader(webpack的babel-loader)
        2. babel-core
        3. babel-preset-es2015 (es6 转es5)
        4. html-webpack-plugin (处理html)
   4. 为什么要用webpack？
      * webpack是最火的模块打包工具
      * 大多浏览器对 ES6 import支持不好
      * 使用node + webpack 在node中开发
