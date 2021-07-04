import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import React, { Component } from 'react';
import { userContext } from './context/userContext'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        userName: ""
      }
    }
  }
  readUser=(userName)=>{
    this.setState({user:{userName}})
  }
  render() {
    const value ={
      user:this.state.user,
      readUser: this.readUser
    }
    return(
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
    )
  };
}

export default App;
