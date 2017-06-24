### webpack 2.x

  1. 搭建基于 webpack构建的项目目录
    * 编译es6  
    * 处理 css文件
    * 处理 图片
    * 处理 字体文件
    * 开启一个 本地测试服务器
  2.安装 webpack和所需插件
    * webpack
    * webpack-dev-server
    * loader加载器：
      1. style-loader
      2. url-loader
      3. css-loader
      4. file-loader
    * babel相关
      1. babel-core
      2. babel-loader"
      3. babel-plugin-import
      4. babel-preset-es2015
    * 处理html
      1. html-webpack-plugin
  3. 编写 webpack.config.js 配置文件
  4. 目录规划
    >> project(项目名)
    >>> node_modules
    >>> webpack.config.js
    >>> package.json
    >>> src (源代码目录)
    >>>> index.js (项目入口文件)
    >>> dist(打包文件目录)
  5. 开发过程
    1. 项目根目录 执行       webpack-dev-server

  6. 打包或者上线时
    * webpack -p  

  7. webpack两种配置文件
    * 开发模式 webpack.config.dev.js
      1. devtool调试模式
      2. webpack-dev-server
    * 生产模式 webpack.config.prod.js
      1. 没有devtool调试模式
  8. npm scripts
    * package.json 里面的 scripts属性
    * 可以快捷的执行命令
  9. 开发模式script
    *     "start": "webpack-dev-server --config webpack.config.dev.js"
  10. 打包模式script
    * "clean" : "rimraf dist", //清除dist
    *     "build":"rimraf dist & webpack --config webpack.config.prod.js -p"

  11. css使用
    * import './css/index.css'
  12. 本地图片使用
     * require('./images/a.jpg')
