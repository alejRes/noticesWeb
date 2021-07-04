import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

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
        <p>{this.props.data.title}</p> 
      </div>
    );
  }
}

export default Card;