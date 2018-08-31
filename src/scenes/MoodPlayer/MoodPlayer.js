import React, { PureComponent } from 'react'
import style from './MoodPlayer.sass'
import { BackButton } from 'components/BackButton/BackButton'
import { GifDisplay } from 'scenes/MoodPlayer/components/GifDisplay'
import { SongDisplay } from 'scenes/MoodPlayer/components/SongDisplay'

const tokenSpotify = fetch('http://matthieuvignolle.fr/spotify.php').then(res => res.json())

export class MoodPlayer extends PureComponent {
  state = { results: [], tracks: [], random: Math.floor(Math.random() * 50) }

  static getDerivedStateFromProps(props) {
    return { currentMood: props.location.state.name }
  }

  componentDidMount() {
    const data = this.props.location.state
    const url = `http://api.giphy.com/v1/gifs/search?q=${data.search}&api_key=dc6zaTOxFJmzC&offset=${this.state.random}`
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
    fetch(
      `https://api.spotify.com/v1/users/${this.props.location.state.user_id}/playlists/${
        this.props.location.state.playlist_id
      }`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + data.access_token,
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(data => {
        this.setState({
          tracks: data.tracks.items,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    let isLoaded = <p>Loading</p>

    //TODO: sometimes the song is null

    if (Object.keys(this.state.tracks).length != 0 && Object.keys(this.state.results).length != 0) {
      isLoaded = (
        <div>
          <SongDisplay data={this.state.tracks} />
          <GifDisplay data={this.state.results} name={this.props.location.state.name} />
        </div>
      )
    }
    return (
      <div className={style.moodplayer_body}>
        <h1 className="title">MOODPLAYER - {this.props.location.state.name}!</h1>
        {isLoaded}
        <BackButton history={this.props.history} />
      </div>
    )
  }
}
