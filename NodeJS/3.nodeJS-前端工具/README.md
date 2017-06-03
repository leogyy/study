### gulp --- 基于nodeJS-
  0. 中文网站:www.gulpjs.com.cn/
  1. 以任务的方式，实现前端工作自动化
    * 压缩打包 文件
    * 改变文件名
    * 修改文件路径....

###　项目演示
　1. 项目中安装gulp
    * npm install gulp --save-dev
  2. 执行 gulp命令，查看是否安装完成   
    * 提示 command no found
    * 需要全局安装
      npm install gulp -g 　
  3. 安装完成以后，需要编写gulpfile.js
    * gulpfile.js  定义了各种任务
    gulp 将按照gulpfile.js里面的规则，执行操作

  4. gulp定义任务
    *
     ``` Javascript
     gulp.task('任务名',function(){
      })
     ```  
  5. 执行任务
    * gulp 任务名
      例如： gulp show

### 自动刷新
   1. gulp + browser-sync
   2. browser-sync 自动同步刷新，调试
   3. 安装 npm install browser-sync -g
### 压缩代码
  1. 压缩css
     * gulp插件 ：gulp-clean-css
     * npm install gulp-clean-css --save-dev  
  2. 压缩js
     * gulp-uglify 压缩js  混淆js   
     * npm install gulp-uglify --save-dev
  3. 以队列方式执行任务
    * gulp-sequence
### 其他任务
  1. 移动images文件夹到 dist
  2. 移动html文件 到dist
  3. 改变html里面的所有的js css 图片的 引入路径      
