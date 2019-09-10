import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import MedSystem from './layout/medsystem';
import * as serviceWorker from './serviceWorker';
import './includes/bootstrap';
import './assets/css/material-dashboard.css';
//import './assets/scss/material-dashboard-pro-react.scss';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/medsystem" component={MedSystem} />
            <Redirect from="/" to="/medsystem/home" />
        </Switch>
    </Router>,
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
