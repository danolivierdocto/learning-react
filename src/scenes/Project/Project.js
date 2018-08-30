import React, { Component } from 'react'
import { UserDisplay } from 'scenes/Project/components/UserDisplay'
import { BackButton } from 'components/BackButton/BackButton'
import style from 'scenes/Project/Project.sass'

export class Project extends Component {
  state = { results: [] }

  //TODO: Transfer this into /api
  //Get data before composant mount
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data.results,
        })
      })
  }

  render() {
    const { results } = this.state
    return (
      <div className={style.project_body}>
        <h1 className="title">Ma super liste de user !</h1>
        <ul>
          {results.map((result, index) => (
            <UserDisplay key={index} data={result} />
          ))}
        </ul>
        <BackButton history={this.props.history} />
      </div>
    )
  }
}
