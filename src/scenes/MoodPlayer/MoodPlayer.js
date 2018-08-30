import React, { PureComponent } from 'react'
import style from './MoodPlayer.sass'
import { BackButton } from 'components/BackButton/BackButton'
import qs from 'query-string'
import { GifDisplay } from 'scenes/MoodPlayer/components/GifDisplay'
import { SongDisplay } from 'scenes/MoodPlayer/components/SongDisplay'

export class MoodPlayer extends PureComponent {
  state = { results: [] }

  static getDerivedStateFromProps(props) {
    return { currentMood: qs.parse(props.location.search) }
  }

  componentDidMount() {
    console.log(this.state.currentMood)
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.currentMood.search}&api_key=dc6zaTOxFJmzC&limit=10`
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(data => {
        this.setState({
          results: data.data,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.results)
    return (
      <div className={style.moodplayer_body}>
        <h1 className="title">MOODPLAYER - {this.state.currentMood.mood}!</h1>
        <SongDisplay />
        {/*TODO: When api fail or didn't finish to fetch the component GifDisplay should not be rendered bc it crash
         the view */}
        {/*TODO: change this for a loading component, for slow 3G ... or do a Fetch component*/}
        {Object.keys(this.state.results).length === 0 ? (
          <p>Loading</p>
        ) : (
          <GifDisplay data={this.state.results} name={this.state.currentMood.mood} />
        )}
        <BackButton history={this.props.history} />
      </div>
    )
  }
}
