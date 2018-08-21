import React, {Component} from 'react';
import { User } from './User';
import { BackButton } from "./BackButton";

export class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    };

    //Get data before composant mount
    componentWillMount() {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        results: data.results
                    })
                }
            );
    }

    render() {
        const {results} = this.state;
        console.log('test'); // why it is rendered 2 times ?
        return (
            <div>
                <h1>Ma super liste de user !</h1>
                <ul>
                    {results.map((result, index) => (
                        <User key={index} data={result}/>
                    ))}
                </ul>
                <BackButton history={this.props.history}/>
            </div>
        )
    }
}
