import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxPromise from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxPromise, thunk, logger))
) 

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
