import React, { PureComponent } from 'react'
import style from 'scenes/MoodPlayer/components/SongDisplay'

export class SongDisplay extends PureComponent {
  state = {
    random: '0',
    numberOfSong: Object.keys(this.props.data).length,
  }

  static getDerivedStateFromProps(props, state) {
    return { currentSong: props.data[state.random].track.preview_url }
  }

  componentDidMount() {
    this.interval = setInterval(this.changeSong, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    console.log(new Date())
  }

  changeSong = () => {
    const newRandom = Math.floor(Math.random() * this.state.numberOfSong)
    if (newRandom != this.state.random) {
      this.setState({
        random: newRandom,
      })
    } else {
      this.changeSong()
    }
  }

  render() {
    return <audio src={this.state.currentSong} controls autoPlay />
  }
}
