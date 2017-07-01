import React,{Component,PropTypes} from 'react';
import './index.css';


class Item extends Component{
  constructor(props){
    super(props);
  }




  render(){
    return(
      <div className="item">

          <div className="item-left">
            {this.props.leftContent}
          </div>
          <div className="item-center">
            {this.props.centerContent}
          </div>
          <div className="item-right">
            {this.props.rightContent}
          </div>

      </div>
    )
  }


}

export default Item;
