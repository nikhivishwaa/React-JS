import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Header/Navbar.js'
import News from './components/Body/News.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} api="d65eb36cc2184c84a75633820799b833"/>
      </div>
    )
  }
}