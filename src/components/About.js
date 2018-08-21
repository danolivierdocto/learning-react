import React, { Component } from 'react'
import { BackButton } from "./BackButton";


export class About extends Component {
    render() {
        return(
            <div>
                <h1>About page !</h1>
                <BackButton history={this.props.history}/>
            </div>
        )
    }
}