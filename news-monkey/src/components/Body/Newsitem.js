import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, desc, url, image } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image ? image : "https://shorturl.at/hjpBL"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 45) : ""}</h5>
            <p className="card-text">{desc ? desc.slice(0, 88) : ""}</p>
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
