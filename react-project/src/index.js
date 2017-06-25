// 入口文件
import React from 'react'; //react 核心库
import ReactDOM from 'react-dom'; //操作dom
import Page from './components/Page/'; //自定义button组件

const rootEl = document.getElementById('app');

ReactDOM.render(<Page />, rootEl)
