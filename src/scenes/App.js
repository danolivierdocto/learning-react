import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { About } from './About/About'
import { Project } from './Project/Project'

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/project' component={Project}/>
            </Switch>
        )
    }
}