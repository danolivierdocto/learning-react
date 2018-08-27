import React, { Component } from 'react'

export class UserDisplay extends Component {
  render() {
    const data = this.props.data

    return (
      <li className="li">
        My name is {data.name.first} {data.name.last} and i'm {data.dob.age}
      </li>
    )
  }
}
