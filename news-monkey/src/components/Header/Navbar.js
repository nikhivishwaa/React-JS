import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-light" to="/">
              NewsMonkey
            </NavLink>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link text-light mx-2" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light mx-2" to="/business">
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-light mx-2"
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light mx-2" to="/health">
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light mx-2" to="/general">
                    General
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light mx-2" to="/science">
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light mx-2" to="/sports">
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-light mx-2"
                    to="/technology"
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
