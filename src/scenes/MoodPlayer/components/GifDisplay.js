import React, { Component } from 'react'
import style from './GifDisplay.sass'

export class GifDisplay extends Component {
  state = {
    currentUrl: '',
    random: '0',
  }

  componentWillReceiveProps(newProps) {
    this.setState({ currentUrl: newProps.data[0].images.downsized_medium.url })
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
