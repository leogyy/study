import head from './head';

import './css/iconfont.css';
import './css/index.css';
head();

let imgStr = `<img src=${require('./images/cover.jpg')} />`
let icon =  `<i class="iconfont icon-zhuye"></i>`;

document.body.innerHTML = imgStr+icon;
