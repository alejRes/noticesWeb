import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../../pages/Home'
import Form from '../../pages/Form'
import ListNews from '../../pages/ListNews'
import './Main.css';

class Main extends Component {
  constructor(props){
  super(props);
  this.state = {};
  }
  readNews =(notice)=>{
    this.setState({news:notice})
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/form" component={()=><Form readNews={this.readNews}/>} />
          <Route path="/list" component={()=><ListNews data={this.state.news}/>} />
        </Switch>
      </div>
    );
  }
}

export default Main;