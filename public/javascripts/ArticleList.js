import React, { Component } from 'react';
//import logo from './logo.svg';
//import './Source.css';

class Article extends React.Component {
  render() {
    return <li>{props.value}</li>;
  }
}

class ArticleList extends Component {
  constructor(props) {
    super(props);
    
    
    // this.articles = props.articles.map((article) =>
    //   // Correct! Key should be specified inside the array.
    //   <Article key={article.toString()} value={article}>
    //   </Article>
    // <h1 class="title">${article.title}</h1>
    //        <img src="${article.urlToImage}"></img>
    //        <p class="description">${article.description}</p>
    //        <p class="link_to_article"><a href="${article.url}">Read full article</a></p>
    //        <p class="author">By ${article.author} on (${new Date(article.publishedAt).toLocaleString()})</p>
    // );
  }

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  render() {
    var listItems = this.props.articles.map((item) =>
      <div key={item.title}>
        <h1 class="title">{item.title}</h1>
        <img src={item.urlToImage}></img>
        <p class="description">{item.description}</p>
        <p class="link_to_article"><a href={item.url}>Read full article</a></p>
        <p class="author">By {item.author} on {new Date(item.publishedAt).toLocaleString()}</p>        
      </div>
    );

    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default ArticleList;