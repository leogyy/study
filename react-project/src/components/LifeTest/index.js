import React, {Component,PropTypes} from 'react';



class LifeTest extends Component{

  constructor(props){
    super(props);
    this.state ={  //初始state状态
      name :'李白'
    }

    console.log('....我是constructor');

  }

  handleClick(){
    this.setState({
      name : '方清平'
    })
  }

  componentWillMount(){
    console.log('...我是componentWillMount')
  }

  componentDidMount(){
    console.log('...我是componentDidMount')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('...我是shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState)
    return true;
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    console.log('...我是componentWillReceiveProps');
  }

  componentDidUpdate(){
    console.log('...componentDidUpdate')
  }

  componentWillUnMount(){
    console.log('...componentWillUnMount')
  }

  render(){
    console.log('...我是 render');
    return (
      <div>
        <h3>React组件生命周期</h3>
        <h4>{this.state.name}</h4>
        <button
        onClick={this.handleClick.bind(this)}>
        测试
        </button>
      </div>
    )
  }

}


export default LifeTest //导出
