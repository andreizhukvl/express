import React, { Component } from 'react';

class Article extends React.Component {
  render() {
    let article = this.props.value;

    return (
      <div>
        <h1 class="title">{article.title}</h1>
        <img src={article.urlToImage}></img>
        <p class="description">{article.description}</p>
        <p class="link_to_article"><a href={article.url}>Read full article</a></p>
        <p class="author">By {article.author} on {new Date(article.publishedAt).toLocaleString()}</p>        
      </div>
      );
  }
}

export default Article;