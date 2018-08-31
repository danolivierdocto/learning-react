import React from 'react'
import { MoodWrapper } from 'scenes/MoodTube/components/MoodWrapper'
import style from 'scenes/MoodTube/MoodTube.sass'

export const MoodTube = () => (
  <div className={style.moodtube_body}>
    <h1 className="title">MOODTUBE</h1>
    <MoodWrapper />
  </div>
)
