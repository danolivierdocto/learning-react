import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'scenes/Home/Home'
import { About } from 'scenes/About/About'
import { Project } from 'scenes/Project/Project'
import { MoodPlayer } from 'scenes/MoodPlayer/MoodPlayer'
import { MoodTube } from 'scenes/MoodTube/MoodTube'

const mood =
  "/(glitter|sad|happy|dancing|chilling|working|sporty|sexual|travelling|gangsta|trendy|tgif|frenchy|kawaï|rockstar|jazzy|country|blessed|80's|90's|2000's)"

export default class App extends Component {
  render(
    div = (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/moodtube" component={MoodTube} />
          <Route path={this.mood} component={MoodPlayer} />
        </Switch>
      </div>
    )
  ) {
    return div
  }
}
