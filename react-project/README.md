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
  2. ES6 class方式\

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
