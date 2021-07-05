import React, { Component } from 'react';
import './ListNews.css';
import Card from './Card'
// import dataNews from '../../data/datanews'
import axios from 'axios'


class ListNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[],
      publish:[]
    };
  }

  componentDidMount(){
    console.log('buscando...')
    
      axios.get(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&language=es&apiKey=ae1c7dbb54904677afec169ab22db879`).then(res=> this.setState({news:res.data.articles})).catch(err=>console.log(`err`, err))
      console.log(this.props.data)
      // https://newsapi.org/v2/everything?q=tesla&from=2021-06-05&sortBy=publishedAt&apiKey=ae1c7dbb54904677afec169ab22db879
      // 80a338aa1c224ec8982b6738a82004b7
      // 857f9e83c01c415ea06310edf0856466
      // https://newsapi.org/v2/everything?q=covid&language=es&apiKey=ae1c7dbb54904677afec169ab22db879
    
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
        aletNews.push({...this.state.news[pos],id:i})
        console.log('array ale',aletNews)
      }
      this.setState({publish:[...this.state.publish,...aletNews]})
      console.log(`newPublish`, this.state.publish)
    }
  }
  deleteNews = (i) =>{
    let filternews=this.state.publish.filter(item => {
      console.log(i)
      console.log(`item.id`, item.id)
      return i !== item.id
    })
    this.setState({publish:filternews})
  }
  /* funcion que se utiliza para pintar todas las tarjetas de noticias */
  paintNews = () => this.state.publish.map((notice, i) => <Card data={notice} key={i} remove={()=>this.deleteNews(notice.id)}/>)
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