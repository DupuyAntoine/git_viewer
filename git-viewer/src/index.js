import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';
import App from './components/App';
import Search from './components/Search';
import Project from './components/Project';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="users/:username" component={Project}/>
        </Route>
    </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
