/* import React, { Component } from 'react';
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
 */

import React from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import HomeIcon from '@material-ui/icons/Home';
import PageIcon from '@material-ui/icons/Pages';

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  fullList: {
    width: 'auto',
  },
});

export default function Nav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    menu: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <Link to='home'>
            <ListItemText primary='Home' />
          </Link>
        </ListItem>
         <ListItem>
          <ListItemIcon><InboxIcon/></ListItemIcon>
          <Link to='Form'>
            <ListItemText primary='Formulario' />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><PageIcon/></ListItemIcon>
          <Link to='list'>
            <ListItemText primary='News' />
          </Link>
        </ListItem> 
      </List>
    </div>
  );

  return (
    <div>
      {['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
