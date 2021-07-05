import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  handleChange =(e)=>{
    // const user=this.state.user
    // user[e.target.name]=e.target.value
    this.setState({news:{
        ...this.state.news,
        [e.target.name]:e.target.value
      }
    })  
  }
  sendNews =(e)=>{
    e.preventDefault()
    this.props.readNews(this.state.news)
    }

  

  render() {
    return (
      <div >
        <form action="" onSubmit={this.sendNews} className="Form">
          <label htmlFor="">Autor</label>
          <input type="text" name='author' onChange={this.handleChange}/>
          <label htmlFor="">Titulo</label>
          <input type="text" name='title'onChange={this.handleChange}/>
          <label htmlFor="">Descripción</label>
          <input type="text" name='description'onChange={this.handleChange}/>
          <label htmlFor="">Enlace</label>
          <input type="text" name='url'onChange={this.handleChange}/>
          <label htmlFor="">Imagen</label>
          <input type="text" name='urlToImage'onChange={this.handleChange}/>
          <label htmlFor="">Contenido</label>
          <textarea type="text" name='content'onChange={this.handleChange}/>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form;