import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
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
          <Route path="/home" component={Products} exact />
          <Route path="/form" component={Staff} />
          <Route path="/list" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default Main;