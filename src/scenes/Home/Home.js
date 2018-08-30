import React, { Component } from 'react'
import { Columns } from 'react-bulma-components/full'
import style from 'scenes/Home/Home.sass'
import LinkButton from 'components/LinkButton'

export class Home extends Component {
  render() {
    return (
      <div className={style.home_body}>
        <h1 className="title">My home page!</h1>
        <Columns>
          <Columns.Column>
            <LinkButton to="/about" className="button">
              About
            </LinkButton>
          </Columns.Column>

          <Columns.Column>
            <LinkButton to="/project" className="button">
              Project
            </LinkButton>
          </Columns.Column>
          <Columns.Column>
            <LinkButton to="/moodtube" className="button">
              MoodTube
            </LinkButton>
          </Columns.Column>
        </Columns>
      </div>
    )
  }
}
