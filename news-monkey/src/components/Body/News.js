import React, { Component } from 'react'
import Newsitem from './Newsitem.js'

export class News extends Component {
  render() {
    return (
      <div>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
      </div>
    )
  }
}

export default News
