import ReactDOM from "react-dom";
var React = require('react');
import { Provider } from 'react-redux'
var routes = require('./src/routes/Routes.js');
import store from './src/store';


ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document
);
