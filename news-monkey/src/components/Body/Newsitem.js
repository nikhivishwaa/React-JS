import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, desc, url, image } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={url} className="btn btn-primary">
              Go to Site
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
