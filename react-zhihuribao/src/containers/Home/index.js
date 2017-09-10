import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import {MySlider} from '../../components/';
import './index.css';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : [], //电影列表初始值
      isLoading : true, //是否正在加载
    }
    console.log('constructor...')
  }

  componentDidMount(){
    let testUrl = 'http://api.xxx.com/movie';
    axios.get(testUrl)
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });


    console.log('home didMount');
    let url = '/api/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b';
    // let url = '/index/Wan/wjlei';
    axios.get(url)
    .then((response) =>  {
      let data = response.data; //取出电影列表
      console.log(data);
      this.setState({    //更新 组件 状态中的 data
        data : data.subjects,
        isLoading : false
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render(){
    console.log('render...');
    let {data, isLoading} = this.state;//取出state中data和isLoading
    let loadingNode = isLoading
    ?  <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
    : null;

    let listNode = data.map(function(dData,index){
      return (
        <div key={dData.id}>
          {dData.title}
        </div>
      )
    });

    return(
      <div>
       <MySlider />
       Home
       <Link activeClassName="active" to="/">首页</Link>
       <Link to="/detail/123">详情页</Link>
       <Link to="/navpage">导航页</Link>
       {loadingNode}

       <div className="movie-list">
          {listNode}
       </div>
      </div>
    )
  }


}

export default Home;
