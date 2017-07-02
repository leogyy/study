import React,{Component,PropTypes} from 'react';

class Button extends Component{
  constructor(props){
    super(props);
  }


  render(){
    console.log(this.props.children)


    return(
      <button>
      {this.props.children}
      </button>
    )
  }


}

export default Button;
