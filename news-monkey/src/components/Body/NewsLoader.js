import React, { Component } from "react";
import Newsitem from "./Newsitem.js";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader.js";

export class News extends Component {
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        api: PropTypes.string,
        category: PropTypes.string,
        topic: PropTypes.string,
    };
    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general",
        topic:"",
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 0,
            // total: 1
        };
    }
    getArticles = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        return parsedData;
    };
    async componentDidMount() {
        this.props.progress(30);
        let res = await this.getArticles();
        this.props.progress(80);
        this.setState({
            articles: res.articles,
            loading: false,
            total: res.totalResults,
        });
        this.props.progress(100);
    }
    loadData = async () => {
        let res = await this.getArticles();
        this.setState({
            articles: this.state.articles.concat(res.articles)
        });
    };

    caps = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    render() {
        return (
            <>
                <div className="container my-4">
                    <h3 className="my-5 text-center">NewsMonkey - Top {this.props.topic ? this.caps(this.props.topic) : ""} Headlines</h3>
                    {this.state.loading && (<Loader />)}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.loadData}
                        hasMore={this.state.total > this.state.articles.length}
                        loader={<Loader />}
                        style={{ overflow: "hidden" }}
                    >
                        <div className="row">
                            {this.state.articles.map((article) => {
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
                    </InfiniteScroll >
                </div>
            </>
        );
    }
}

export default News;
