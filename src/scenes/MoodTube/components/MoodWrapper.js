import React, { Component } from 'react'
import LinkButton from '../../../components/LinkButton'

//TODO: add backend with DB
const moodList = [
  { id: 1, name: 'Glitter', data_search: 'glitter' },
  { id: 2, name: 'Sad', data_search: 'cry' },
  { id: 3, name: 'Happy', data_search: 'happy' },
  { id: 4, name: 'Dancing', data_search: 'dancing' },
  { id: 5, name: 'Chilling', data_search: 'chill' },
  { id: 6, name: 'Working', data_search: 'work' },
  { id: 7, name: 'Sporty', data_search: 'fitness' },
  { id: 8, name: 'Sexual', data_search: 'sex' },
  { id: 9, name: 'Travelling', data_search: 'travel' },
  { id: 10, name: 'Gangsta', data_search: 'thug' },
  { id: 11, name: 'Trendy', data_search: 'lit' },
  { id: 12, name: 'Tgif', data_search: 'tgif' },
  { id: 13, name: 'Frenchy', data_search: 'paris' },
  { id: 14, name: 'Kawaï', data_search: 'kawai' },
  { id: 15, name: 'Rockstar', data_search: 'rock' },
  { id: 16, name: 'Jazzy', data_search: 'jazz' },
  { id: 17, name: 'Country', data_search: 'cowboy' },
  { id: 18, name: 'Blessed', data_search: 'jesus' },
  { id: 19, name: "80's", data_search: 'disco' },
  { id: 20, name: "90's", data_search: 'disco' },
  { id: 21, name: "2000's", data_search: 'party' },
]

export class MoodWrapper extends Component {
  render() {
    return (
      <div>
        {moodList.map(mood => (
          <LinkButton
            to={`i-feel/?mood=${mood.name.toLowerCase()}&search=${mood.data_search}`}
            className={`button-${mood.name.toLowerCase()}`}
            name={mood.name}
            search={mood.data_search}
            key={mood.id}
          >
            {mood.name}
          </LinkButton>
        ))}
      </div>
    )
  }
}
