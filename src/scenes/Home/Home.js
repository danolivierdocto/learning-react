import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Columns, Button } from 'react-bulma-components/full';
import style from './Home.sass';

export class Home extends Component {
    render() {
        return(
            <div className={style.home_body}>
                <h1 className="title">My home page!</h1>
                <Columns>
                    <Columns.Column>
                        <Button >
                            <Link to='/about'>About</Link>
                        </Button>
                    </Columns.Column>

                    <Columns.Column>
                        <Button >
                            <Link to='/project'>Project</Link>
                        </Button>
                    </Columns.Column>
                </Columns>


            </div>
        )
    }
}