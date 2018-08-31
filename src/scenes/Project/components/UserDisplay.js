import React from 'react'

export const UserDisplay = props => (
  <li className="li">
    My name is {props.data.name.first} {props.data.name.last} and i'm {props.data.dob.age}
  </li>
)
