import React,{Component,PropTypes} from 'react';

class Comment extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h3>{this.props.data.name}</h3>
        <p>{this.props.data.msg}</p>
      </div>
    )
  }

}

export default Comment;
