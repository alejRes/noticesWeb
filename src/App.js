import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import React, { Component } from 'react';
import { userContext } from './context/userContext'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        nameUser: ""
      }
    }
  }
  return() {
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  };
}

export default App;
