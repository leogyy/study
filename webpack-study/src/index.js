import head from './head';

import './css/iconfont.css';
import './css/index.css';
head();
let url = require('./images/cover.jpg')
let imgStr = `<img src=${url} />
<i class="iconfont icon-zhuye"></i>
`;

document.body.innerHTML = imgStr;
