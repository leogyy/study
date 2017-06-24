### webpack 2.x
  1. webpack 是一个现代的 JavaScript 应用程序的模块打包器<br>
    * webpack可以看做是模块打包机：
    * 它做的事情是，分析你的项目结构，
    * 找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（less），
    * webpack 把所有资源(css,图片)以模块化处理
    * 并将其打包为合适的格式以供浏览器使用<br>
    ![image](https://github.com/highmind/Study/raw/master/preview-img/webpack.png)
  2. 安装
    ``` JavaScript
      npm install webpack --save-dev  //安装webpack
      //使用 webpack -v,查看是否安装成功,不成功，则 全局安装
      npm install webpack -g
    ```
  3. 基本配置
    * webpack需要一个 js 配置文件 webpack.config.js
    * 常用配置：
      ``` JavaScript
      module.exports = { // nodeJS模块语法

        devtool: '', //sourcemap配置，方便错误调试

        entry: {    // 入口配置

        },

        output: {  //出口配置

        },

        module: {  //加载器配置
          rules: []
        },

        plugins: [ //插件配置

        ],

        devServer:{ // webpack-dev-server

        }

      }
      ```

  4. 加载器(loader)

    * 加载器(loader)是对应用程序中资源文件进行转换。比如:ES6 转 ES5
    * 常用loader

      1. JS处理
        * 所需node包
          1. babel
          ``` JavaScript
          "babel-core": "^6.23.1",
          "babel-plugin-import": "^1.1.1",
          "babel-loader": "^6.3.2",
          "babel-preset-es2015": "^6.22.0",
          "babel-preset-stage-0": "^6.22.0",
          ```
      2. css样式处理
          ``` JavaScript
          "css-loader": "^0.26.2",
          "style-loader": "^0.13.2",
          ```  
      3. 图片处理
         ``` JavaScript
         "url-loader": "^0.5.8"
         ```
      4. 文件处理
        ``` JavaScript
        "file-loader": "^0.10.1"
        ```

  5. 插件
    * html-webpack-plugin //处理html，比如讲bundle.js插入到页面中
  6. webpack-dev-server
    * 安装
    ``` JavaScript
    npm install webpack-dev-server
    ```
