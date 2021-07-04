import React, { Component } from 'react';
import './ListNews.css';
import Card from './Card'
// import dataNews from '../../data/datanews'
import axios from 'axios'
import { throwStatement } from '@babel/types';

class ListNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[],
      publish:[]
    };
  }

  componentWillMount(){
    console.log('buscando...')
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&language=es&apiKey=80a338aa1c224ec8982b6738a82004b7`).then(res=> this.setState({news:res.data.articles}))
  }
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}

  /* rellena un array aux para precargar solo 5 noticias de la api */
  componentDidUpdate(prevProps, prevState){
    let aletNews = []
    if(this.state.news!==prevState.news){
      for (let i = 0; i < 5; i++) {
        let pos = Math.floor(Math.random() * 20);
        console.log('aleatoria',this.state.news)
        aletNews.push(this.state.news[pos])
        console.log('array ale',aletNews)
      }
      this.setState({publish:[...this.state.publish,...aletNews]})
      console.log(`newPublish`, this.state.publish)
    }
  }
  /* funcion que se utiliza para pintar todas las tarjetas de noticias */
  paintNews = () => this.state.publish.map((notice, i) => <Card data={notice} key={i} />)
  /* console.log(`newPublish`, this.state.newsPublish) */
    // this.state.newsPublish.forEach((notice)=><Card/>)

  render() {
    return (
      <div>
        {this.paintNews()}
      </div>
    );
  }
}

export default ListNews;