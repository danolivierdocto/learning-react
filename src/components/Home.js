import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Columns from 'react-bulma-components/lib/components/columns';

export class Home extends Component {
    render() {
        return(
            <div>
                <h1>My home page!</h1>
                <Columns>
                    <Columns.Column>
                        <button>
                            <Link to='/about'>About</Link>
                        </button>
                    </Columns.Column>

                    <Columns.Column>
                        <button>
                            <Link to='/project'>Project</Link>
                        </button>
                    </Columns.Column>
                </Columns>


            </div>
        )
    }
}