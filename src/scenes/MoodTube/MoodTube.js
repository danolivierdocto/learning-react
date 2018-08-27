import React, { Component } from 'react'
import { MoodWrapper } from './components/MoodWrapper'
import style from './MoodTube.sass'

export class MoodTube extends Component {
  render() {
    return (
      <div className={style.moodtube_body}>
        <h1 className="title">MOODTUBE</h1>
        <MoodWrapper />
      </div>
    )
  }
}
