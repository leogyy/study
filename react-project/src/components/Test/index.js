import React, {Component,PropTypes} from 'react';
import './index.css';


class Test extends Component{

  constructor(props){
    super(props);
    this.state = { //组件初始状态
      isShow : true
    };
  }

  handleClick(){
    this.setState({
      isShow : !this.state.isShow
    });

    console.log('hahahahaha');
  }


  render(){
    return (
      <div>
        <button
        onClick={this.handleClick.bind(this)}>
         按钮
        </button>

        <div className={this.state.isShow ? 'box-show' : 'box-hide'}>
          内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
      </div>
    )
  }

}


export default Test //导出
