import React,{Component,PropTypes} from 'react';
import CommentInput from '../CommentInput/';
import CommentList from '../CommentList';
import './index.css';

let msgData = [
  {"id":1, "name":"李白", "msg":"飞流直下三千尺"},
  {"id":2, "name":"杜甫", "msg":"一览众山小"},
  {"id":3, "name":"王维", "msg":"大漠孤烟直"},
]


class CommentApp extends Component{
  constructor(props){
    super(props);
    this.state={
      txt:'彭于晏',
      comments:msgData
    }
  }

  changeTxt(str){
    this.setState({
      txt: str
    })
  }
  //data 为{}
  pubFn(data){
    msgData.unshift(data);
    console.log(msgData)
    this.setState({ //设置新的 数据，并渲染
      comments:msgData
    })
  }

  render(){
    return(
      <div className="comment-app">
        <h3>{this.state.txt}</h3>
        <CommentInput
         pubClick={this.pubFn.bind(this)}
         clickFn={this.changeTxt.bind(this)} />
        <CommentList data={this.state.comments} />
      </div>
    )
  }


}

export default CommentApp;
