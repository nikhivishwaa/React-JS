import React, { Component } from "react";

export class Newsitem extends Component {
  newsDate = (date) => {
    date = new Date(date);
    date = date.toString().split(" ");
    return [date[2], date[1], date[3]].join(" ");
  };
  render() {
    let { title, desc, url, image, date } = this.props;
    return (
      <>
        <div className="card mx-2 my-2">
          <img
            src={image ? image : "https://shorturl.at/hjpBL"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 45) : ""}</h5>
            <p className="card-text">{desc ? desc.slice(0, 88) : ""}</p>
            <p className="card-text">
              <strong>Publish Date : </strong>
              {this.newsDate(date)}
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
