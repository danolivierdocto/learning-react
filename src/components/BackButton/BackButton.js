import React, { Component } from 'react'
import './BackButton.sass'

export class BackButton extends Component {
  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <button onClick={this.goBack} className="button is-danger">
        Go Back !
      </button>
    )
  }
}
