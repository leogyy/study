import React,{Component,PropTypes} from 'react';
import './index.css';
class App extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
       <div className="test flex-wrap">
        <div className="flex-1 box"></div>
        <div className="flex-5 box"></div>
        <div className="flex-1 box"></div>
        <div className="flex-1 box"></div>
       </div>
       <h4>这是导航组件</h4>
       {this.props.children}
      </div>
    )
  }


}

export default App;
