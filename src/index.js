import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// global styles
import "normalize.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

// redux config
import {applyMiddleware, combineReducers, createStore} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";
import {Provider} from "react-redux";

const reduxStore = createStore(combineReducers({reducers: reducers}), applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

reportWebVitals();
