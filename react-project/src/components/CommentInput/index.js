import React,{Component,PropTypes} from 'react';
import './index.css';

class CommentInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      username : '输入姓名',
      msg : '输入内容'
    }
  }

  handleClick(){
    //调用 父组件传入的 方法
    // this.props.clickFn('郭德纲')
    let name = this.refs.username.value;
    let msg = this.refs.msg.value;
    let msgCon = {
      "id" : Math.random(),
      "name" : name,
      "msg" : msg
    }

    this.props.pubClick(msgCon);

  }

  changeName(e){
    this.setState({
      username:e.target.value
    })

  }

  changeMsg(e){
    this.setState({
      msg:e.target.value
    })
  }

  render(){
    return(
      <div>

        <div className="flex-wrap mr-top20">

          <div className="flex-1">
            <label>用户:</label>
          </div>

          <div className="flex-5">
            <input ref="username"
            type="text"
            value={this.state.username}
            onChange={this.changeName.bind(this)}
            />
          </div>

        </div>

        <div className="flex-wrap mr-top20">

          <div className="flex-1">
            <label>内容:</label>
          </div>

          <div className="flex-5">
            <textarea
            ref="msg"
            value={this.state.msg}
            onChange={this.changeMsg.bind(this)}
            >
            </textarea>
          </div>

        </div>

       <div className="btn-wrap">
        <button onClick={this.handleClick.bind(this)}>提交</button>
       </div>

      </div>
    )
  }


}

export default CommentInput;
