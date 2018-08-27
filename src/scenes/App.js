import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { About } from './About/About'
import { Project } from './Project/Project'
import { MoodPlayer } from './MoodPlayer/MoodPlayer'
import { MoodTube } from './MoodTube/MoodTube'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/moodtube" component={MoodTube} />
          <Route path="/i-feel" component={MoodPlayer} />
        </Switch>
      </div>
    )
  }
}
