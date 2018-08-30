import React, { Component } from 'react'
import style from './SongDisplay.sass'
import qs from 'query-string'

const tokenSpotify = fetch('http://matthieuvignolle.fr/spotify.php').then(res => res.json())

export class SongDisplay extends Component {
  componentDidMount() {
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
    return <audio src={this.props} controls />
  }
}
