var http = require('http'); //引入http模块
var hostname = '127.0.0.1';
var port = 3000;
// 创建服务端
var server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hello');
});
// 监听端口和ip
server.listen(port, hostname,function(){
  console.log('服务器运行在'+hostname + ' ' + port);
});
