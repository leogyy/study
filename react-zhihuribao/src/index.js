// 入口文件
import React from 'react'; //react 核心库
import ReactDOM from 'react-dom'; //操作dom

import {Router, hashHistory} from 'react-router';
import Routes from './routes/';

const rootEl = document.getElementById('app');


ReactDOM.render(
  <Router history={hashHistory} routes={Routes}>
  </Router>
  , rootEl);
