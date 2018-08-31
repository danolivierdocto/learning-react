import React, { PureComponent } from 'react'
import style from 'scenes/MoodPlayer/components/GifDisplay.sass'

export class GifDisplay extends PureComponent {
  state = {
    random: '0',
    numberOfGif: Object.keys(this.props.data).length,
  }

  static getDerivedStateFromProps(props, state) {
    return { currentUrl: props.data[state.random].images.downsized_medium.url }
  }

  componentDidMount() {
    this.interval = setInterval(this.changeGif, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  //TODO: it seems that the longer it goes, the more slow my cpu get ( it's already dying so idk if it'm my
  // component ).
  changeGif = () => {
    const newRandom = Math.floor(Math.random() * this.state.numberOfGif)
    if (newRandom != this.state.random) {
      this.setState({
        random: newRandom,
      })
    } else {
      this.changeGif()
    }
  }

  render() {
    return (
      <div>
        <img src={this.state.currentUrl} alt={`${this.props.name} gif`} crossOrigin="anonymous" />
      </div>
    )
  }
}
