import React, { Component } from 'react';

export class User extends Component {
    render() {
        const data = this.props.data;

        return (
            <li>
                My name is {data.name.first} {data.name.last} and i'm {data.dob.age}
            </li>
        )
    }
}
