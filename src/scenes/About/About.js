import React, { Component } from 'react'
import { BackButton } from "../../components/BackButton/BackButton";

const style: any = require('./About.sass');



export class About extends Component {
    render() {
        return(
            <div className={style.about_body}>
                <h1>About page !</h1>
                <BackButton history={this.props.history}/>
            </div>
        )
    }
}