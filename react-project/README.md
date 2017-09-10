### 前端技术流
  1. 前后端分离
    * 前端负责 展现和交互逻辑
      1. 页面UI和页面的交互，渲染，用户体验
    * 后端负责 业务和数据接口
      1. 数据存储和业务逻辑，接口，安全
    * 优点：灵活，各端更专注，分工明确，职责分明

### 单页面应用-single page application
  1. 常用框架web端
    * reactJS --- facebook开发，UI层
    * vueJS  --- 华人开发-尤雨溪 ， UI层
    * angular --- google

  2. 常用框架app端
    * react-navtive
    * 阿里的weex
  3. 把整个应用拆分成多个组件，方便复用

### React
  * React是一个 UI库
  * React将界面 分成很多组件，react中一切都是组件
  * 组件之间可以组合，嵌套，构成页面
  * 使用了虚拟DOM，优化性能
  * 一个组件的显示状态和行为， 有数据决定
  * 数据 变化，会引起 组件显示形态变化

### React技术栈
    1. webpack
    2. babel
    3. ES6
    4. Node
    5. 常用Node包
      * axios ajax库
      * whatwg-fetch ajax库
      * mockjs 模拟假数据
    6. react 核心库
    7. react-dom 操作dom的react库
    8. react-router 路由库

### React 组件语法
  1. ES5方式
  2. ES6 class方式

### React中使用样式
  1. 导入样式文件
  ``` JavaScript
  import './index.css'
  ```

### React JSX语法
  1. 使用className加入类
  ``` HTML
  <div className="box"></div>
  ```

  2. style属性方式
    * 需要传一个json对象
    ``` JavaScript
    let styleData = {
      borderRadius : '4px',
      width:'200px'
    };

    <button style={styleData}>确认</button>
    ```

### React组件的属性 props
  * props(属性)：可以外部 传入 参数 来 配置组件的形态
  * 在组件上 设置 属性，
  * 组件内部 通过 this.props.属性名 拿到属性，做相应的逻辑操作，可以改变 组件的形态
  * 默认属性
    1. 当使用者  在 组件调用时，没有传相应的属性时，
    使用组件 内部定义的 默认属性
    ```JavaScript
    static defaultProps = { //默认属性设置
      text : '确认'
    }; // 注意此处有分号

    ```
  * 属性类型检测
    ``` JavaScript
    static propTypes = { //属性类型检查
      size: React.PropTypes.string.isRequired,

    }; //注意此处有分号
    ```
  * 外面传进来的 属性，组件内部无法控制和修改
  * 除非外部出入 新的 props值 ，否则 props永远不变

###  React组件中的状态
  * state:用于组件 保存、控制、修改自己的可变状态
  * 外部无法访问，也不能修改
  * 组件初始状态
  ``` JavaScript
  constructor(props){
    super(props);
    this.state = { //组件初始状态
      isShow : true
    };
  }
  ```
  * 使用 this.setState方法更新 组件状态
  * 取值 使用 this.state.值的名字
  * state变化 会引起 组件 render方法 执行，组件重新渲染

### JSX
  * 基本概念
    1. JSX 是 js语言的一种扩展，长得像HTML，但不是HTML
    2. React 组件 可以用 JSX 描述 长什么样
    3. JSX 在编译时候，会变成相应的JS对象描述
    4. react-dom 负责把 编译的 js对象 变成 DOM元素，
    并渲染到页面中。

  * JSX的语法规范
    1. 一个组件 必须有 一个 render方法，必须返回一个
    JSX元素
    2. 必须有 一个 外层 的 JSX元素 把所有 内容包裹起来，返回多个 并列的 JSX元素是不合法
    3. 表达式插入
      * 在JSX中 可以插入 js表达式，返回的结果会 显示到页面中
      * 表达式用 {} 包裹，可以放任意的js代码
        ，包括变量，表达式运算，函数执行
    4. 使用 className 添加类名

### React中的事件
  * 元素上 加属性 onClick 、onKeyDown等
  * on* 的事件 监听 只能用在普通的 HTML标签上，而不能用在 组件标签上
  * this问题
    * react组件中调用方法的时候，并不是通过对象的方法调用 this.xxxx
    * 需要手动绑定
    ``` JavaScript
    //不传参数
    this.handleClick.bind(this);
    // 如果传参数
    this.handleClick.bind(this,'李白')
    ```
### React 浏览器开发者工具
  * react developer tools

### React 渲染列表
  * 文章列表/评论列表
  * data.map(function(dData, index){ //遍历

    })
  * 在 遍历生成的jsx元素上，要加上key属性，每个key属性的值 必须唯一
  ``` JavaScript
  let nodes = msgData.map((dData, index) => {
    return (
      <li key={dData.id}>
        {dData.name}：
        <p>{dData.msg}</p>
      </li>
    )
  });
  ```

### React 组件的嵌套和组合
    1. 组件之间可以互相嵌套组合，拼成一个大的组件

### React 留言板
    1. 组件划分
      * CommentApp 总父组件
      * CommentInput 输入组件
      * CommentList  留言列表组件
      * Comment  留言项组件
    2. CommentList留言列表组件 <br/>
      * 数据来自外部
      * 渲染和逻辑在组件内部实现
        1. 通过this.props.自定义属性名，获取外部传入的数据
      ``` JavaScript
      <CommentList data={msgData}  />
      ```
      * 低耦合 高内聚

### React表单
    * 获取表单数据
      1. 表单添加 ref属性
        ``` JavaScript
        <input ref="username" type="text" />
        ```
      2. 可以通过 this.refs.username使用

    * 受控表单组件 (官方建议使用)
      1. 设置了 value的input就是受控组件
      2. input变为了 readonly，不能修改值
      3. 如果想修改值，需要使用 onChange事件
      4. e.target.value 获取表单值

    * 非受控表单组件
      1. 表单不设置value值，则是非受控组件
      2. 可以通过 defaultValue 设置默认值


### React 组件间通信
    * 父组件与子组件 通信
      1. this.props 通过子组件 传入数据和方法

    * 子组件和父组件 通信
      1. 回调函数，父组件将定义的方法，传入 子组件的props，子组件内部进行调用

    * 兄弟组件间通信
      1. 通过父组件 进行 中间转化
      2. 通过redux等 框架

### React组件开发- Icon图标组件
    * 使用 iconfont 字体图标技术
    * webpack需要配置 对字体文件的支持
    * 原理：
      1. 根据不同的props 生成不同的类名
      ``` JavaScript
      let fType = `iconfont icon-${type}`;
      ```
      2. 根据props生成 style
      ``` JavaScript
      let styleData = {
        color:this.props.color,
      }
      ```
      3. 组件的 defaultProps设置 某些属性的默认值，用于调用组件的默认值
      ``` JavaScript
      static defaultProps = {
        color:'#666666'  //设置组件默认值
      }
      ```
    * 最终效果：
      ``` JavaScript
      <Icon type="user" color="red" />
      <Icon type="film" />
      ```

### React props高级用法
    * props可以接收 字符串,数字,方法
    * 还可以 接收 一个组件或者 JSX
    * 可以 将组件的一部分  从组件分离，减少耦合
    * 例如
    ``` JavaScript
    <Item
    leftContent={leftData}
    centerContent={centerData}
    rightContent={rightData}
    />
    ```

### React 组件生命周期
    1. 初始化
      * constructor
        1. this.state 设置 组件的 初始状态
    2. 挂载阶段
      * React 将组件渲染， 并且构造DOM元素，然后 塞入页面
      中的过程，称为 组件挂载阶段
        1. componentWillMount()
          * 组件挂载开始之前，调用render方法之前，DOM元素没有插入页面
        2. componentDidMount()
          * 组件挂载完成之后，DOM元素已经插入页面中
          * 一般在此方法中，通过ajax请求远程数据

    3. 更新阶段
      * 组件在挂载到页面中以后，有时候 会响应 交互等，
      根据新的数据，改变自身状态或者形态，
      * 例如，一个 列表list组件，在新的数据变化时候，
      会变长，加载更多数据，
      * 这种阶段 称为 组件的 更新阶段

      * shouldComponentUpdate(nextProps,nextState)
        1. 通过此方法控制组件是否需要重新渲染
        2. 返回 false 组件不会重新渲染
        3. 返回 true  组件重新渲染

      * componentWillReciveProps(nextProps)  
        1. 组件从父组件接收到新的 props 之前调用

      * componentDidUpdate()
        1. 组件重新渲染并且 变更到真实的DOM 以后调用
        2. 此时可以访问到 新的 DOM元素
        3. 可以复用组件
     4. 卸载阶段
        1. componentWillUnmount()
        2. 组件对应的 DOM元素 从页面中 删除之前调用

### React组件三种写法
    1. ES5写法
    2. ES6 class写法
    3. 纯函数
### React 知乎日报web版
    1. 目录规划
      >project
      >> src
      >>> components  所有的 木偶组件
      >>>> Button 按钮组件
      >>>> Icon 图标组件
      >>>> List 列表组件

      >>> containers  所有 容器/页面组件
      >>>> Home 组件
      >>>> Detail 组件

    3. 组件分类
        1. 木偶组件 没有生命周期方法，数据来自于 外部
        2. 容器组件  有生命周期方法，由多个木偶组件组成，
        把数据通过木偶组件的 props 传入

### React-router 路由管理库
   1. 路由：根据不同的网址 ，展示不同的界面
      * www.xxx.com/Home/   
      * www.xxx.com/film/
   2. 路由逻辑
      * /      => App组件 所有页面都会加载的组件 放到App组件
      * /home  => Home组件
      * /detail => Detail组件
      * navpage =>  NavPage组件
   3. 使用方法
      1. 配置 route 路由规则
        ``` JavaScript
        <Route path="/" component={App}>
          <Route path="home" component={Home} />
          <Route path="detail" component={Detail} />
          <Route path="navpage" component={NavPage} />
        </Route>
        ```
      2. 改造入口文件，引入路由规则，并应用
        ``` JavaScript
        import {Router, hashHistory} from 'react-router';
        import Routes from './routes/';
        const rootEl = document.getElementById('app');

        ReactDOM.render(
          <Router history={hashHistory} routes={Routes}>
          </Router>
          , rootEl);
        ```
      3. 改造 App组件
        * 加入 this.props.children

### React-router 切换路由
    1. Link组件
      * activeClassName 当前路由下的  匹配的 Link的样式

### React-router 路由模式
    1. hashHistory   有 #
    2. browserHistory  没有#，但是需要服务器配置
### react-router  Redirect
    * from
    * to

### React-router 路由传参
    * 修改路由
    ``` JavaScript
    <Route path="detail/:id" component={Detail} />
    ```
    * Detail组件里使用以下方法获取
    ``` JavaScript
    this.props.params.id
    ```

### this.props.children
    1. 表示 组件的 所有 子节点
    2. 可以使用React.Children.map来遍历子节点

### ajax 跨域问题
  1. http://localhost/api.php
  ``` json
  {
    "id":"1",
    "name":"\u674e\u767d",
    "job":"\u8bd7\u4eba"
  }

  ```
  2. 浏览器的同源策略
  3. 跨域：只要协议、域名、端口任何一个不同，都会触发同源策略，都当做不用域
  4. 解决方案：
    1. 方法1： 使用jsonp
    2. 方法2： 服务器端设置以下 access-control-allow-origin
    3. 方法3：使用代理
  5. jsonp使用
    * jquery中 ajax 的jsonp使用
      1. dataType设置为 jsonp
      2. 后端修改接口,接收前端传过来的callback参数，并和json拼接输出
      ``` php
      echo $callback . '(' . $json . ')';
      ```
  6. jsonp原理：js script标签 引入文件的，跨域特性来实现

### React中发起ajax请求
  1. 常用ajax库
    * axios(支持promise)
    * fetch(支持promise)
  2. axios使用
    * 安装
    ``` javascript
    npm install axios --save-dev
    ```
  3. 前后端分离模式
    * 开发环境和 接口服务器不在一个域
      1. 开发环境： localhost:3000
      2. 接口服务： localhost:8080
    * 出现跨域问题
    * 可以使用webpack-dev-server的 代理

  4. webpack-dev-server
    * 配合webpack开启本地服务
    * 支持 自定义端口号
    * 支持 配置 proxy(代理)，转发请求
  5. react组件中 一般在 componentDidMount生命周期方法中，发ajax请求

### js回调地狱(了解)
  1. 在js回调函数，调用函数，函数中又包含回调函数，层层调用，代码可读性下降

### Promise对象(了解)
  1. ES6 新增对象，可以优雅解决回调函数问题
  2. ``` javascript
        var promise = new Promise(function(resolve, reject) {
      // ... some code

      if (/* 异步操作成功 */){
        resolve(value);
      } else {
        reject(error);
      }
      });
     ```
  3. 可以使用 then方法，执行后续操作，减少回调函数
### async 函数解决异步操作(了解)

### 使用mock做模拟数据
  1. mockjs  (可安装到项目中)
    * http://mockjs.com/
    ``` javascript
      npm install mockjs --save-dev
    ```
    * 为什么要使用mockjs？
      1. 解决使用js json 太长的问题
      2. 实现特殊的格式， 随机数，图片，地址
      3. 实现 模拟网络延迟
    * 功能
      1. 拦截和模拟ajax请求
      2. 基于 数据模板 生成模拟数据
    * 使用
      1. 数据模板语法
      2. Mock.mock(url, type, template)
      3. Mock.setup() 配置延迟
  2. easy-mock(在线版网站)

### React项目脚手架
  1. create-react-app
### React常用的包或者库
  1. antd-design
