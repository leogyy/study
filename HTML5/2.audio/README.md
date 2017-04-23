### HTML5
#### 音频
  1. 创建音频
    * html方式
      1. <audio src="文件路径或者地址" />
      2. <audio controls>
          <source src="music.ogg" type="audio/ogg">
          <source src="music.mp3" type="audio/mpeg">
          您的浏览器不支持HTML5 audio，呵呵
      </audio>

    * js创建方式
      1. var music = new Audio();
   	 music.src = 'source/chengdu.mp3';
      2. var music = new Audio(路径);


  2. audio html属性
     1. controls 控制条
     2. autoplay 自动播放 (iphone 浏览器不支持)
     3. loop 循环播放
     4. preload 预加载
  3. js属性
     1. .volume = number 音量控制(0到1之间)
        * 0 静音
     2. .duration 获取音乐总长度
     3. .currentTime 播放当前时间  
     4. .paused 是否暂停
  4. js方法
     1. .play() 播放音乐
     2. .pause() 暂停  
  4. js事件
     1. timeupdate  音乐播放时候，不断的触发
  5. 字符串
     1. String.fromCharCode(字符码)
     字符编码转字符

#### 音乐播放器
  1. audio play方法 pause方法
  2. 单个按钮控制音乐播放和暂停
  3. 进度条
  4. 音量条
  5. 按钮 字体图标
