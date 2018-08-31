import React, { PureComponent } from 'react'
import style from './MoodPlayer.sass'
import { BackButton } from 'components/BackButton/BackButton'
import { GifDisplay } from 'scenes/MoodPlayer/components/GifDisplay'
import { SongDisplay } from 'scenes/MoodPlayer/components/SongDisplay'

const tokenSpotify = fetch('http://matthieuvignolle.fr/spotify.php').then(res => res.json())

export class MoodPlayer extends PureComponent {
  state = { results: [] }

  static getDerivedStateFromProps(props) {
    return { currentMood: props.location.state.name }
  }

  componentDidMount() {
    const data = this.props.location.state
    const url = `http://api.giphy.com/v1/gifs/search?q=${data.search}&api_key=dc6zaTOxFJmzC&limit=10`
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

    fetch('http://matthieuvignolle.fr/spotify.php')
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(data => {
        this.spotify(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  spotify = data => {
    fetch('https://api.spotify.com/v1/users/spotify/playlists/7uDoSz5VxK5lbXgj7tBMG9', {
      headers: new Headers({
        Authorization: 'Bearer ' + data.access_token,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(data => {
        console.log(data.tracks.items)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className={style.moodplayer_body}>
        <h1 className="title">MOODPLAYER - {this.props.location.state.name}!</h1>
        <SongDisplay />
        {/*TODO: When api fail or didn't finish to fetch the component GifDisplay should not be rendered bc it crash
         the view */}
        {/*TODO: change this for a loading component, for slow 3G ... or do a Fetch component*/}
        {Object.keys(this.state.results).length === 0 ? (
          <p>Loading</p>
        ) : (
          <GifDisplay data={this.state.results} name={this.props.location.state.name} />
        )}
        <BackButton history={this.props.history} />
      </div>
    )
  }
}
