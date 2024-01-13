import React, { Component } from "react";

export class Newsitem extends Component {
  newsDate = (date) => {
    date = new Date(date);
    date = date.toString().split(" ");
    return [date[2], date[1], date[3]].join(" ");
  };
  caps = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  render() {
    let { title, desc, url, image, date, source, author } = this.props;
    return (
      <>
        <div className="card mx-2 my-2 position-relative">
          <span className="position-absolute badge rounded-pill text-bg-warning" style={{ zIndex: 2, right: -4, top: -2 }}>
            {this.caps(source ? source : "news")}</span>
          <img
            src={image ? image : "https://shorturl.at/hjpBL"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 45) : ""}</h5>
            <p className="card-text">{desc ? desc.slice(0, 88) : ""}</p>
            <p className="card-text">
              <strong>Published on : </strong>
              {this.newsDate(date)} by {this.caps(author ? author : "unknown")}
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">
              Go to Site &rarr;
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
