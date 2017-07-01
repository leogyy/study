import React,{Component,PropTypes} from 'react';
import Comment from '../Comment/';

class CommentList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let nodes = this.props.data.map(function(dData, index){
      return (
        <Comment key={dData.id} data={dData} />
      )
    })
    return(
      <div>
        {nodes}
      </div>
    )
  }


}

export default CommentList;
