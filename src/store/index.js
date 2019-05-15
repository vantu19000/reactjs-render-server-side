// import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';

// let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
// const store = createStoreWithMiddleware(rootReducer);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
