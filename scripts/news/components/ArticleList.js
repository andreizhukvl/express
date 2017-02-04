import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
  render() {
    var listItems = this.props.articles.map((item, index) =>
      <Article key={index} value={item}>
      </Article>
    );

    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default ArticleList;