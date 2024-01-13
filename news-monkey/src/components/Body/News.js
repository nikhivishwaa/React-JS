import React, { Component } from "react";
import Newsitem from "./Newsitem.js";
import PropTypes from "prop-types";

export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    api: PropTypes.string,
    category: PropTypes.string,
  };
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  getArticles = async (page = 1) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    return parsedData;
  };
  async componentDidMount() {
    let res = await this.getArticles();
    this.setState({
      articles: res.articles,
      loading: false,
      total: res.totalResults,
    });
  }
  handleNextClick = async () => {
    let res = await this.getArticles(this.state.page + 1);
    this.setState({
      articles: res.articles,
      loading: false,
      page: this.state.page + 1,
    });
  };
  handlePrevClick = async () => {
    let res = await this.getArticles(this.state.page - 1);
    this.setState({
      articles: res.articles,
      loading: false,
      page: this.state.page - 1,
      total: res.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <h3 className="my-5 text-center">NewsMonkey - Top Headlines</h3>
          <div className="row">
            {this.state.loading && (
              <div className="d-flex justify-content-center my-9">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {!this.state.loading &&
              this.state.articles.map((article) => {
                return (
                  <div className="col-md-4 my-2" key={article.url}>
                    <Newsitem
                      title={article.title}
                      desc={article.description}
                      url={article.url}
                      image={article.urlToImage}
                      date={article.publishedAt}
                      source={article.source.name}
                      author={article.author}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page - 1 < 1}
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Prev
          </button>
          <button
            disabled={
              Math.ceil(this.state.total / this.props.pageSize) <=
              this.state.page
            }
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
