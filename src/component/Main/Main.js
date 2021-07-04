import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../../pages/Home'
import Form from '../../pages/Form'
import ListNews from '../../pages/ListNews'
import './Main.css';

class Main extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/form" component={Form} />
          <Route path="/list" component={ListNews} />
        </Switch>
      </div>
    );
  }
}

export default Main;