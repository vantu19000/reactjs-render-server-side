import 'babel-polyfilll';
const express = require('express');
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter} from "react-router";
import bodyParse from 'body-parse';

import App from 'app';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParse.json());
app.use(express.static('build'));

app.get('*', (req, res) => {
    const context = {}
    const content = ReactDomServer.renderToString(
        <StaticRouter>
            <App />
        </StaticRouter>
    );
    const html = `
    <html>${content}</html>
    `;
    res.send(html);
});

app.listen(PORT, () => {
    console.log('APP is running with port ' + PORT);
});
