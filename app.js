import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './src/pages/home'

class App extends React.Component{
    render() {
        return (
            <Switch>
                <Route path="/" render={props => (<Home {...props} />)} />
            </Switch>
        )
    }
}
