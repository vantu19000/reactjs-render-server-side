var router = require('express').Router();
var React = require('react');
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router";
var Redux = require('redux');
import { Provider } from 'react-redux'
var NotFound = require('../views/layout/404.js');
import store from '../store';

function reducer(state) { return state; }

router.get('*', function(request, response) {

    const context = {}

    const jsx =
        <Provider store={ store }>
            <StaticRouter context={ context } location={ request.url }>
                <NotFound />
            </StaticRouter>
        </Provider>;

    const content = ReactDOMServer.renderToString(jsx);
    const html = `<html>${content}</html>`;

    response.send(html);

});

module.exports = router;
