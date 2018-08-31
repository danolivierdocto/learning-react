import React, { PureComponent } from 'react'
import style from 'scenes/MoodPlayer/components/SongDisplay'

export class SongDisplay extends PureComponent {
  state = {
    random: '0',
    numberOfSong: Object.keys(this.props.data).length,
  }

  static getDerivedStateFromProps(props, state) {
    return { currentSong: props.data[state.random].track }
  }

  componentDidMount() {
    this.interval = setInterval(this.changeSong, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  //TODO: basically same function of changeGif. Make one global function that we can call in SongDisplay and
  // GifDisplay
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
    if (this.state.currentSong.preview_url === null) {
      this.changeSong()
    }
    return (
      <div>
        <h2 className="subtitle">Now playing : {this.state.currentSong.name}</h2>
        <audio src={this.state.currentSong.preview_url} autoPlay />
        <button onClick={this.changeSong} className="button is-primary">
          Shuffle !
        </button>
      </div>
    )
  }
}
