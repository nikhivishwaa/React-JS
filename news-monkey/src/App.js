import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Header/Navbar.js";
// import News from "./components/Body/News.js";
import NewsLoader from "./components/Body/NewsLoader.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  api = "d65eb36cc2184c84a75633820799b833";
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<NewsLoader key="" pageSize={9} category="general" api={this.api} />}
          ></Route>
          <Route
            path="/general"
            element={<NewsLoader key="general" pageSize={9} category="general" api={this.api} />}
          ></Route>
          <Route
            path="/business"
            element={<NewsLoader key="business" pageSize={9} category="business" api={this.api} />}
          ></Route>
          <Route
            path="/entertainment"
            element={<NewsLoader key="entertainment" pageSize={9} category="entertainment" api={this.api} />}
          ></Route>
          <Route
            path="/health"
            element={<NewsLoader key="health" pageSize={9} category="health" api={this.api} />}
          ></Route>
          <Route
            path="/science"
            element={<NewsLoader key="science" pageSize={9} category="science" api={this.api} />}
          ></Route>
          <Route
            path="/sports"
            element={<NewsLoader key="sports" pageSize={9} category="sports" api={this.api} />}
          ></Route>
          <Route
            path="/technology"
            element={<NewsLoader key="technology" pageSize={9} category="technology" api={this.api} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
