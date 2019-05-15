var router = require('express').Router();
var React = require('react');
import { match, RouterContext } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router";
var Redux = require('redux');
var Provider = require('react-redux').Provider;
var NotFound = require('../views/layout/404.jsx');


function reducer(state) { return state; }

router.get('*', function(request, response) {

    const context = {}
    const content = ReactDOMServer.renderToString(
        <StaticRouter>
            <NotFound />
        </StaticRouter>
    );
    const html = `<html>${content}</html>`;
    res.send(html);

});

module.exports = router;
