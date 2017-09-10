// 入口文件
import React from 'react'; //react 核心库
import ReactDOM from 'react-dom'; //操作dom

import {Router, hashHistory, browserHistory} from 'react-router';
import Routes from './routes/'; //导入路由配置
import './mock/';//导入mock数据

const rootEl = document.getElementById('app');


ReactDOM.render(
  <Router history={hashHistory} routes={Routes}>
  </Router>
  , rootEl);
