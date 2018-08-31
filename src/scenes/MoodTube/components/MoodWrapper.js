import React, { Component } from 'react'
import LinkButton from 'components/LinkButton'

//TODO: add backend with DB
const moodList = [
  { id: 1, name: 'Glitter', data_search: 'glitter', user_id: 'spotify', playlist_id: '7uDoSz5VxK5lbXgj7tBMG9' },
  { id: 2, name: 'Sad', data_search: 'cry', user_id: 'spotify_uk_', playlist_id: '0ApL3HCGSTLQhXIcQqIMVZ' },
  { id: 3, name: 'Happy', data_search: 'happy', user_id: 'iloveplaylists', playlist_id: '1V93SRHKAhfJ83uFY8YtAg' },
  { id: 4, name: 'Dancing', data_search: 'dancing', user_id: 'spotify', playlist_id: '7b9XqnXw5J47tmn0Y0IZeW' },
  { id: 5, name: 'Chilling', data_search: 'relax', user_id: 'spotify', playlist_id: '5rJNwG9BImUMYDrN5D3aUi' },
  { id: 6, name: 'Working', data_search: 'work', user_id: 'spotify_france', playlist_id: '7gvtLWWpXVxQfIRtjkJk8n' },
  { id: 7, name: 'Sporty', data_search: 'fitness', user_id: 'digster.fr', playlist_id: '1rUqrkSj6eDDSlLTb98qfy' },
  { id: 8, name: 'Sexual', data_search: 'sex', user_id: '1230056338', playlist_id: '54VqYS5eGzITyXWYw3RK2Y' },
  { id: 9, name: 'Travelling', data_search: 'travel', user_id: 'spotify', playlist_id: '3TA33aezSXwtdkmbTxSknA' },
  { id: 10, name: 'Gangsta', data_search: 'thug', user_id: 'digster.fr', playlist_id: '0MF1XGKzqqeL0ZHeqMrq7R' },
  { id: 11, name: 'Trendy', data_search: 'lit', user_id: 'warnerfrspotify', playlist_id: '71Yp73gW0EuxhaPrTkmTN7' },
  { id: 12, name: 'Tgif', data_search: 'tgif', user_id: 'spotify', playlist_id: '2JkjXscXs35c5wKE5ZeaYK' },
  { id: 13, name: 'Frenchy', data_search: 'paris', user_id: 'nicolaslanglois', playlist_id: '1ydTKOkRvoHpNvJhWjOLce' },
  { id: 14, name: 'Kawaï', data_search: 'kawai', user_id: '12124288245', playlist_id: '3qcBgSbo3mtCeAtUmGraGP' },
  { id: 15, name: 'Rockstar', data_search: 'rock', user_id: 'spotify', playlist_id: '2Qi8yAzfj1KavAhWz1gaem' },
  { id: 16, name: 'Jazzy', data_search: 'jazz', user_id: 'spotify', playlist_id: '3YxrKQSAnQGlgxrEAWbwSm' },
  { id: 17, name: 'Country', data_search: 'cowboy', user_id: 'digster.fm', playlist_id: '6nU0t33tQA2i0qTI5HiyRV' },
  { id: 18, name: 'Blessed', data_search: 'jesus', user_id: '1124117330', playlist_id: '1Lfv5hpiBqtxHIlaeUo8TS' },
  { id: 19, name: "80's", data_search: 'disco', user_id: 'myplay.com', playlist_id: '19PgP2QSGPcm6Ve8VhbtpG' },
  { id: 20, name: "90's", data_search: 'disco', user_id: 'myplay.com', playlist_id: '3C64V048fGyQfCjmu9TIGA' },
  { id: 21, name: "2000's", data_search: 'party', user_id: 'myplay.com', playlist_id: '2f6tXtN0XesjONxicAzMIw' },
]

export class MoodWrapper extends Component {
  render() {
    return (
      <div>
        {moodList.map(mood => (
          <LinkButton
            to={{
              pathname: `/${mood.name.toLowerCase()}`,
              state: {
                name: mood.name,
                search: mood.data_search,
                user_id: mood.user_id,
                playlist_id: mood.playlist_id,
              },
            }}
            key={mood.id}
          >
            {mood.name}
          </LinkButton>
        ))}
      </div>
    )
  }
}
