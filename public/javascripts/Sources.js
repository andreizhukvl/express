import React, { Component } from 'react';
import ArticleList from './ArticleList';
const API_KEY = 'd1450e81d3cb4c4ba3f2f5c772206b14';
const API_ARTICLE_BASE_URL = 'https://newsapi.org/v1/articles?source=';
//import logo from './logo.svg';
//import './Source.css';

class Sources extends Component {
  constructor(props) {
    super(props);
    this.listItems = props.items.map((item) =>
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
    this.state = {
      selectedItem: null,
      articles: [{title: "ggg"}, {title: "asdasd"}, {title:"addddsdasd"}]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <select id='sources' onChange={this.handleChange}>
          {this.listItems}
        </select>
        <button id='magic_button' onClick={() => this.handleClick()}>Show selected news.</button>
        <ArticleList articles={this.state.articles}></ArticleList>
      </div>
    );
  }

  handleChange(event) {
    this.setState({selectedItem: event.target.value});
  }

  handleClick() {
    var selectedItem = this.state.selectedItem;
    var self = this;
    fetch(API_ARTICLE_BASE_URL + selectedItem + "&apiKey=" + API_KEY).then(result => {
        if (result.ok)
        {
          return result.json();
        }
      }).then(data => {
        self.setState({
          articles: data.articles
        });
      });
    
    alert('Your selected article is: ' + this.state.selectedItem);
  }
}

export default Sources;