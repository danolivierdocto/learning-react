import React, { Component } from 'react'
import style from 'scenes/MoodPlayer/components/SongDisplay.sass'

export class SongDisplay extends Component {
  componentDidMount() {}

  render() {
    return <audio src={this.props} controls />
  }
}
