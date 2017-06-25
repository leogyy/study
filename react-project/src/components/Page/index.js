import React,{Component,PropTypes} from 'react';
import Button from '../Button';
import MsgList from '../MsgList';
import Test from '../Test';

class Page extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return(
      <div>
        这是page组件
        <Button size="xs" text="中大奖" />
        <MsgList />
        <Test />
      </div>
    )
  }

}

export default Page;
