import head from './head';

import './css/iconfont.css';
import './css/index.css';
head();
var url = require('./images/cover.jpg')
var  imgStr = `<img src=${url} />
<i class="iconfont icon-zhuye"></i>
`;

document.body.innerHTML = imgStr;
