import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'

class Nav extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
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
      
        <nav className="Nav">
        <ul className="Nav__list">
          <li className="Nav__listItem">
            <Link className="Nav__link" to="home">Home</Link>
          </li>
          <li>
            <Link to="/form">Formulario</Link>
          </li>
          <li>
            <Link to="/list">Noticias</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;