import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Project }from './Project'

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/project' component={Project}/>
                </Switch>
            </main>
        )
    }
}