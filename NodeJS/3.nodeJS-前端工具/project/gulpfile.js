var gulp = require('gulp');
var browserSync = require('browser-sync');//引入浏览器同步包
var miniCss = require('gulp-clean-css'); //压缩css的包
var uglifyJS= require('gulp-uglify');//压缩js
var seq = require('gulp-sequence'); //队列方式执行任务

//写第一个任务
gulp.task('show',function(){
  console.log('第一个gulp任务，什么都不干');
});

// 浏览器同步任务
gulp.task('browser-sync',function(){
  browserSync.init({
    server:{ //开启服务器
      baseDir:'./' //目录路径
    },
    browser: "chrome"
  });
  gulp.watch(['*.html','src/css/*.css']).on('change',
  browserSync.reload
  )

})


// 压缩css
gulp.task('css',function(){
  return gulp.src('./src/css/*.css')
  .pipe(miniCss())
  .pipe(gulp.dest('./dist/css'))
})

// 压缩js
gulp.task('js',function(){
  return gulp.src('./src/js/*.js')
  .pipe(uglifyJS())
  .pipe(gulp.dest('./dist/js'))
})

gulp.task('default',seq('js','css'));
