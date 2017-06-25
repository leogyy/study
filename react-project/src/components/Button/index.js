import React, {Component,PropTypes} from 'react';
import './index.css';

// style方式加样式
// let styleData = {
//   borderRadius : '4px',
//   width:'200px'
// };

class Button extends Component{

  constructor(props){
    super(props);
  }

  static defaultProps = { //默认属性设置
    text : '确认'
  }; // 注意此处有分号

  static propTypes = { //属性类型检查
    size: React.PropTypes.string.isRequired,

  }; //注意此处有分号

  render(){
    let {size, text} = this.props; //es6 解构赋值

    let clsName = 'btn';

    if(size == 'xs'){
      clsName += ' btn-xs';
    }

    return (
      <div>
        <button  className={clsName}>{text}</button>
      </div>
    )
  }

}


export default Button //导出
