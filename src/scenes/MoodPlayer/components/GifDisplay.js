import React, { Component } from 'react'
import style from './GifDisplay.sass'

export class GifDisplay extends Component {
  state = {
    //TODO: make a loader component or display a gif right at the beginning
    currentUrl: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
    random: '0',
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeGif(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  //TODO: it seems that the longer it goes, the more slow my cpu get ( it's already dying so idk if it'm my
  // component ).
  changeGif() {
    const random = Math.floor(Math.random() * 10)
    if (random != this.state.random) {
      this.setState({
        currentUrl: this.props.data[random].images.downsized_medium.url,
        random: random,
      })
      console.log(random)
    } else {
      console.log('same')
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
