import React,{Component,PropTypes} from 'react';
import CommentInput from '../CommentInput/';
import CommentList from '../CommentList';
import Icon from '../Icon/';
import TabBar from '../TabBar';
import Item from '../Item';
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

    let leftData = <img
    width="100%"
    src={require('../../images/img1.jpg')}
    />
;
    let centerData = <div>
      <h4>明月几时有</h4>
      <p>风云变幻遭沦陷，仁人志士展救援</p>
    </div>
;
    let rightData = <button
    className="more-btn">
    查看更多
    </button>
;

  let leftData2 = <button
    className="more-btn"
    >查看更多
    </button>
    ;

  let rightData2 = <img
  width="100%"
  src={require('../../images/img1.jpg')}
   />;

    return(
      <div>

        <Item
        leftContent={leftData}
        centerContent={centerData}
        rightContent={rightData}
        />

        <Item
        leftContent={leftData2}
        centerContent={centerData}
        rightContent={rightData2}
        />



        <div className="comment-app">

          <TabBar />
          <Icon type="user" color="#29cc6d" />
          <Icon type="user" />
          <h3>{this.state.txt}</h3>
          <CommentInput
           pubClick={this.pubFn.bind(this)}
           clickFn={this.changeTxt.bind(this)} />
          <CommentList data={this.state.comments} />
        </div>
      </div>
    )
  }


}

export default CommentApp;
