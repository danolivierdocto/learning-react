import React, { Component } from 'react'
import style from './GifDisplay.sass'

export class GifDisplay extends Component {
  render() {
    const results = this.props.data
    return (
      <div>
        {results.map((result, index) => (
          <img key={index} src={result.images.original.url} alt="" crossOrigin="anonymous" />
        ))}
      </div>
    )
  }
}
