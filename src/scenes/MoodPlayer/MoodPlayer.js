import React, { PureComponent } from 'react'
import style from './MoodPlayer.sass'
import { BackButton } from 'components/BackButton/BackButton'
import { GifDisplay } from 'scenes/MoodPlayer/components/GifDisplay'
import { SongDisplay } from 'scenes/MoodPlayer/components/SongDisplay'
import { isEmpty } from 'lodash'

const tokenSpotify = fetch('http://matthieuvignolle.fr/spotify.php').then(res => res.json())

export class MoodPlayer extends PureComponent {
  state = { results: [], tracks: [], random: Math.floor(Math.random() * 50) }

  data = this.props.location.state

  componentDidMount() {
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.data.search}&api_key=dc6zaTOxFJmzC&offset=${
      this.state.random
    }`
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

  spotify = data =>
    fetch(`https://api.spotify.com/v1/users/${this.data.user_id}/playlists/${this.data.playlist_id}`, {
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
        this.setState({
          tracks: data.tracks.items,
        })
      })
      .catch(error => {
        console.log(error)
      })

  render() {
    return (
      <div className={style.moodplayer_body}>
        <h1 className="title">MOODPLAYER - {this.data.name}!</h1>
        {!isEmpty(this.state.tracks) && !isEmpty(this.state.results) ? (
          <div>
            <SongDisplay data={this.state.tracks} />
            <GifDisplay data={this.state.results} name={this.data.name} />
          </div>
        ) : (
          <p>Loading</p>
        )}
        <BackButton history={this.props.history} />
      </div>
    )
  }
}
