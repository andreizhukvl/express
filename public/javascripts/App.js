class App extends React.Component {
  render() {
    return (
      <div>
        <Source />
        <ArticleList articles={this.articles}></ArticleList>
      </div>
    );
  }
}