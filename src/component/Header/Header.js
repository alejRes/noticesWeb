import React, { Component } from 'react';
import Nav from '../Nav';
import './Header.css';
import {userContext} from '../../context/userContext'

class Head extends Component {

  static contextType = userContext;

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user:{
  //       userName:""
  //     }
  //   };
  // }

  // componentWillMount(){}
  // componentDidMount(){}

  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <Nav/>
        <userContext.Consumer>
          {({user})=>
            user.userName?
              <h3>Bienvenido {user.userName}</h3>:
              <></>
          }
        </userContext.Consumer>
      </div>
    );
  }
}

export default Head;