import React,{component} from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import {App, Home, Detail, NavPage} from '../containers';

// 创建路由规则 并导出

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="detail/:id" component={Detail} />
    <Route path="navpage" component={NavPage} />
    <Redirect from="*" to='/' /> //当所有的都不匹配时，跳转到
    首页
  </Route>

)
