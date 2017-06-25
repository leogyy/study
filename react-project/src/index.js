// 入口文件
import React from 'react'; //react 核心库
import ReactDOM from 'react-dom'; //操作dom
import Button from './components/Button/'; //自定义button组件

const rootEl = document.getElementById('app');

// 接收两个参数，1是  组件，2是 要挂载到哪个节点上
ReactDOM.render(<Button />, rootEl)
