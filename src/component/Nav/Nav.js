import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
class Nav extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  componentWillMount() {
    this.setState({
      isMenuOpened: false
    });
  }

  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <OffCanvas
        width={350}
        transitionDuration={500}
        effect={"push"}
        isMenuOpened={this.state.isMenuOpened}
        position={"right"}
      >
        <OffCanvasBody
          className="bodyClass"
          style={{ fontSize: "20px" }}
        >
            <a href="#" onClick={this.handleClick.bind(this)}>
              Menu
            </a>
          
        </OffCanvasBody>
        <OffCanvasMenu className="menuClass">          
            <ul className="Nav__list">
              <li className="Nav__listItem">
                <Link className="Nav__link" to="home"onClick={this.handleClick.bind(this)}>Home</Link>
              </li>
              <li>
                <Link to="/form"onClick={this.handleClick.bind(this)}>Formulario</Link>
              </li>
              <li>
                <Link to="/list" onClick={this.handleClick.bind(this)}>Noticias</Link>
              </li>
            </ul>
        </OffCanvasMenu>
    </OffCanvas>
      );
  
  }
  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}

export default Nav;