import React, { Component } from 'react'
import style from './MoodPlayer.sass'
import { BackButton } from '../../components/BackButton/BackButton'
import qs from 'query-string'
import { GifDisplay } from './components/GifDisplay'

export class MoodPlayer extends Component {
  state = { results: [] }

  componentDidMount() {
    const currentMood = qs.parse(this.props.location.search)
    console.log(currentMood)
    console.log(this.props)
    const url = `http://api.giphy.com/v1/gifs/search?q=${currentMood.search}&api_key=dc6zaTOxFJmzC&limit=10`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data.data,
        })
      })
  }

  render() {
    //TODO: can be ameliorated
    const currentMood = qs.parse(this.props.location.search)

    return (
      <div className={style.moodplayer_body}>
        <h1 className="title">MOODPLAYER - {currentMood.mood}!</h1>
        <GifDisplay data={this.state.results} name={currentMood.mood} />
        <BackButton history={this.props.history} />
      </div>
    )
  }
}
