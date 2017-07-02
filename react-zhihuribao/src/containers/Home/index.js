import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import './index.css';
class Home extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
       Home
       <Link activeClassName="active" to="/">首页</Link>
       <Link to="/detail">详情页</Link>
       <Link to="/navpage">导航页</Link>
      </div>
    )
  }


}

export default Home;
