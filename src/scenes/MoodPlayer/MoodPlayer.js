import React, { Component } from 'react'
import style from './MoodPlayer.sass'
import { BackButton } from '../../components/BackButton/BackButton'
import qs from 'query-string'

export class MoodPlayer extends Component {
  state = { results: [] }

  componentDidMount() {
    const currentMood = qs.parse(this.props.location.search)
    console.log(currentMood)
    console.log(this.props)
    const url = `http://api.giphy.com/v1/gifs/search?q=${currentMood.search}&api_key=dc6zaTOxFJmzC&limit=5`
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
    const { results } = this.state
    console.log(results)

    return (
      <div className={style.moodplayer_body}>
        <h1 className="title">MOODPLAYER - {currentMood.mood}!</h1>
        {results.map((result, index) => (
          <img key={index} src={result.images.original.url} alt="" crossOrigin="anonymous" />
        ))}

        <div />

        <BackButton history={this.props.history} />
      </div>
    )
  }
}
