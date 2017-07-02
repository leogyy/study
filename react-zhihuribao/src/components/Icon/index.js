import React,{Component,PropTypes} from 'react';
import './iconfont.css'

class Icon extends Component{
  constructor(props){
    super(props);
  }

  static defaultProps = {
    color:'#666666'  //设置组件默认值
  };

  static propTypes = { //属性类型检查
    type: React.PropTypes.string.isRequired,
  };

  render(){
    let type = this.props.type;
    let styleData = {
      color:this.props.color,
    }
    let fType = `iconfont icon-${type}`;
    return(
      <i className={fType} style={styleData}></i>
    )
  }


}

export default Icon;
