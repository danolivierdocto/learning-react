import React, { Component } from 'react'

export class BackButton extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this)
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        return <button onClick={this.goBack}>Go Back !</button>
    }
}