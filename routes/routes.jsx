import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import Layout from '../views/pages/Layout.jsx';
import Index from '../views/pages';
import About from '../views/pages/About.jsx';
import Contact from "../views/pages/Contact.jsx";

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Index} />
            <Route path='about' component={About} />
            <Route path='contact' component={Contact} />
        </Route>
    </Router>
);
