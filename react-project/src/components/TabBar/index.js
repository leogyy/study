import React,{Component,PropTypes} from 'react';
import Icon from '../Icon/';
import './index.css'

class TabBar extends Component{
  constructor(props){
    super(props);
  }



  render(){

    return(
      <div className="tab-bar">
        <div className="flex-wrap">
          <div className="flex-1 txt-center">
            <Icon type="film" />
            <span>上映</span>
          </div>
          <div className="flex-1 txt-center">
            <Icon type="camera" />
            <span>影院</span>
          </div>
          <div className="flex-1 txt-center">
            <Icon type="gift" />
            <span>商城</span>
          </div>
          <div className="flex-1 txt-center">
            <Icon type="user" />
            <span>个人</span>
          </div>
        </div>
      </div>
    )
  }


}

export default TabBar;
