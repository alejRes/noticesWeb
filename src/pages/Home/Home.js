import React, { Component } from 'react';
import './Home.css';
import {userContext} from '../../context/userContext'

class Home extends Component {
  static contextType = userContext;
  constructor(props){
    super(props);
    this.state = {
      user:{
        userName:""
      }
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  changeName =(e)=>{
    this.setState({user:{userName:e.target.value}})
  }
  captureName =()=>{
    
    // console.log(this.context)
    // console.log(this.state.user.userName)
    this.context.readUser(this.state.user.userName)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder='Introduce tu nombre' onChange={this.changeName}/>
        <button onClick={this.captureName}>Enviar</button>
      </div>
    );
  }
}

export default Home;