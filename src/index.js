import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Store from './store/Store';
import * as serviceWorker from './serviceWorker';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/:context" component={App} />
            <Route path="/:context/:id" exact={true} component={App} />
        </Switch>
    </ Router>
  </Provider> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
