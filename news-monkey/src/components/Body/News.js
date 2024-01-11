import React, { Component } from "react";
import Newsitem from "./Newsitem.js";

export class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h3 className="my-3">NewsMonkey - Top Headlines</h3>
        <div className="row">
          <div className="col-md-4">
            <Newsitem
              title="first news"
              url="/"
              image="..."
              desc="getting started"
            />
          </div>
          <div className="col-md-4">
            <Newsitem
              title="first news"
              url="/"
              image="..."
              desc="getting started"
            />
          </div>
          <div className="col-md-4">
            <Newsitem
              title="first news"
              url="/"
              image="..."
              desc="getting started"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
