// 入口文件
import React from 'react'; //react 核心库
import ReactDOM from 'react-dom'; //操作dom
import CommentApp from './components/CommentApp/';
const rootEl = document.getElementById('app');

ReactDOM.render(<CommentApp />, rootEl);
