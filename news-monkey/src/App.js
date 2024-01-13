import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Header/Navbar.js";
// import News from "./components/Body/News.js";
import NewsLoader from "./components/Body/NewsLoader.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  api = process.env.REACT_APP_API_KEY;

  state = { progress: 0 };
  setProgress = (x = 10) => {
    this.setState({ progress: x });
  }
  render() {
    return (
      <BrowserRouter>
        {/* <LoadingBar progress={this.state.progress} onLoaderFinished={this.setProgress(0)}/> */}
        <LoadingBar progress={this.state.progress} />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<NewsLoader progress={this.setProgress} key="" pageSize={9} category="general" api={this.api} />}
          ></Route>
          <Route
            path="/general"
            element={<NewsLoader progress={this.setProgress} key="general" pageSize={9} category="general" topic="general" api={this.api} />}
          ></Route>
          <Route
            path="/business"
            element={<NewsLoader progress={this.setProgress} key="business" pageSize={9} category="business" topic="business" api={this.api} />}
          ></Route>
          <Route
            path="/entertainment"
            element={<NewsLoader progress={this.setProgress} key="entertainment" pageSize={9} category="entertainment" topic="entertainment" api={this.api} />}
          ></Route>
          <Route
            path="/health"
            element={<NewsLoader progress={this.setProgress} key="health" pageSize={9} category="health" topic="health" api={this.api} />}
          ></Route>
          <Route
            path="/science"
            element={<NewsLoader progress={this.setProgress} key="science" pageSize={9} category="science" topic="science" api={this.api} />}
          ></Route>
          <Route
            path="/sports"
            element={<NewsLoader progress={this.setProgress} key="sports" pageSize={9} category="sports" topic="sports" api={this.api} />}
          ></Route>
          <Route
            path="/technology"
            element={<NewsLoader progress={this.setProgress} key="technology" pageSize={9} category="technology" topic="technology" api={this.api} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
