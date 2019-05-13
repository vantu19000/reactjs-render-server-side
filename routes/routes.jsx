import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import Layout from '../views/Layout.jsx';
import Index from '../views/Index.jsx';
import About from '../views/About.jsx';
import Contact from "../views/Contact.jsx";

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Index} />
            <Route path='about' component={About} />
            <Route path='contact' component={Contact} />
        </Route>
    </Router>
);
