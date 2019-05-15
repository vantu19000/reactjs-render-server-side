var ReactDOM = require('react-dom');
var React = require('react');
import { Provider } from 'react-redux'
var routes = require('./src/routes/Routes.js');
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document
);
