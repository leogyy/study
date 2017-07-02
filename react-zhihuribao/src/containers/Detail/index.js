import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
class Detail extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
       Detail
       <Link to="/">返回首页</Link>
      </div>
    )
  }


}

export default Detail;
