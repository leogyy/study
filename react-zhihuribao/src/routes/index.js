import React,{component} from 'react';
import {Route, IndexRoute} from 'react-router';
import {App, Home, Detail, NavPage} from '../containers';

// 创建路由规则 并导出

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="detail" component={Detail} />
    <Route path="navpage" component={NavPage} />
  </Route>

)
