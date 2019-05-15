import React from 'react';
import {Switch, Route} from 'react-router';


import Layout from '../views/layout/Layout.jsx';
import Index from '../views/pages/index.jsx';
import About from '../views/pages/About.jsx';
import Contact from "../views/pages/Contact.jsx";
import NotFound from "../views/layout/404.jsx";

/*
module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Index} />
            <Route path='about' component={About} />
            <Route path='contact' component={Contact} />
            <Route component={NotFound} />
        </Route>
    </Router>
);
*/


class Routes extends React.Component{
    render() {
        return (
            <Switch>
                <Route path="/" render={props => (<Index {...props} />)} />
                <Route path="about" render={props => (<About {...props} />)} />
                <Route path="contact" render={props => (<Contact {...props} />)} />
            </Switch>
        )
    }
}